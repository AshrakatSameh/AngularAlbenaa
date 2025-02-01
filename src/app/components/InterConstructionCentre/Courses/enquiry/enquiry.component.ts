import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnquiryCourseService } from 'src/app/services/enquiry-course.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit{

  myCourseApplicantForm!:FormGroup;

  ngOnInit(): void {
    this.myCourseApplicantForm = this.fb.group({
      name:['', Validators.required],
      email: ['', Validators.required],
      phone:['', Validators.required],
      educationalQualification:['', Validators.required],
      courseAskAbout:['', Validators.required],
      question:['',Validators.required]
    });
  }
  
  constructor( private fb: FormBuilder , private cousreAskInfoService : EnquiryCourseService){}

  onSubmitCourseApplicant() {
    if (this.myCourseApplicantForm.valid) {
      const newCourseApplicantItem = this.myCourseApplicantForm.value;
      this.cousreAskInfoService.postCourseAskInfo(newCourseApplicantItem).subscribe(
          () => {
            alert('تم التسجيل')
              this.myCourseApplicantForm.reset();
              // Optionally, refresh the news list or navigate back to the list
          },
          error => {
            alert('خطا في التسجيل')

          }
      );
  } else {
      console.error('Form is invalid');
  }
  }
}
