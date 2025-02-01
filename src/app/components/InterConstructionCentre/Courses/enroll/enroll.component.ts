import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseApplicantService } from 'src/app/services/course-applicant.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {

  myCourseApplicantForm!:FormGroup;

  ngOnInit(): void {
    this.myCourseApplicantForm = this.fb.group({
      name:['', Validators.required],
      email: ['', Validators.required],
      phoneNumber:['', Validators.required],
      educationalQualification:['', Validators.required],
      courseName:['', Validators.required],
    });
  }

  constructor(private courseApplicantService : CourseApplicantService , private fb: FormBuilder,

  ){}

  onSubmitCourseApplicant() {
    if (this.myCourseApplicantForm.valid) {
      const newCourseApplicantItem = this.myCourseApplicantForm.value;
      this.courseApplicantService.postCourseApplicant(newCourseApplicantItem).subscribe(
          () => {
            alert('تم التسجيل')
              this.myCourseApplicantForm.reset();
              // Optionally, refresh the news list or navigate back to the list
          },
          error => {
            alert(' خطا في التسجيل')
                    }
      );
  } else {
      console.error('Form is invalid');
  }
}
  



}
