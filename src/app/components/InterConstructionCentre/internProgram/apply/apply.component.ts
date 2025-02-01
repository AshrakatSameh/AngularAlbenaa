import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrainingApplicantService } from 'src/app/services/training-applicant.service';
import { TrainingsService } from 'src/app/services/trainings.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyTrainingComponent implements OnInit {

  myCourseApplicantForm!:FormGroup;

  ngOnInit(): void {
    this.myCourseApplicantForm = this.fb.group({
      name:['', Validators.required],
      phone:['', Validators.required],
      educationalQualification:['', Validators.required],
      trainingName:['', Validators.required],
    });
  }

  constructor( private fb: FormBuilder, private trainingApplicantService:TrainingApplicantService){}

  onSubmitCourseApplicant() {
    if (this.myCourseApplicantForm.valid) {
      const newCourseApplicantItem = this.myCourseApplicantForm.value;
      this.trainingApplicantService.postTrainingApplicant(newCourseApplicantItem).subscribe(
          () => {
            alert('تم التسجيل ')
              console.log('TainingApplicant item added successfully');
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
