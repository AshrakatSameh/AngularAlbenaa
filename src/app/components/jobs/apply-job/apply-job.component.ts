import { DatePipe } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, NgControl, Validators } from '@angular/forms';
import { Component, Directive, ElementRef, OnInit, Pipe } from '@angular/core';
import { JobApplicantService } from 'src/app/services/job-applicant.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.css'],
})


export class ApplyJobComponent implements OnInit {
private apiUrl:string = environment.apiUrl
  formData: any = {}; // Object to hold form data

  jobForm!: FormGroup;
  fileToUpload!: File | null;

  constructor( private fb: FormBuilder,
    private http: HttpClient ) {
      this.jobForm = this.fb.group({
        name: ['', Validators.required],
        dateOfBirth: ['', Validators.required],
        address: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        graduationYear: ['', Validators.required],
        gender: ['', Validators.required],
        university: ['', Validators.required],
        faculty: ['', Validators.required],
        applicantCv: ['', Validators.required]

      });
    }

    handleFileInput(event: Event) {
      const inputElement = event.target as HTMLInputElement;
      const files: FileList | null = inputElement.files;
      if (files && files.length > 0) {
        this.fileToUpload = files[0];
        console.log(this.fileToUpload); // Log the selected file to verify
        
      } 
      else {
        console.error('No file selected');
      }
    }

    onSubmit() {
      if (!this.fileToUpload) {
        console.error('No file selected');
        return;
      }
      const formData = new FormData();
      const name = this.jobForm.get('name')!.value;
      const dateOfBirth = this.jobForm.get('dateOfBirth')!.value;
      const address = this.jobForm.get('address')!.value;
      const phoneNumber = this.jobForm.get('phoneNumber')!.value;  
      const graduationYear = this.jobForm.get('graduationYear')!.value;   
      const gender = this.jobForm.get('gender')!.value;   
      const university = this.jobForm.get('university')!.value;   
      const faculty = this.jobForm.get('faculty')!.value;   
      const applicantCv = this.jobForm.get('applicantCv')!.value;   
 
      if (name && dateOfBirth && address && phoneNumber && graduationYear &&
        gender && university && faculty && applicantCv
       ) {
        formData.append('name', name);
        formData.append('dateOfBirth', dateOfBirth);
        formData.append('address', address);
        formData.append('phoneNumber', phoneNumber);
        formData.append('graduationYear', graduationYear);
        formData.append('gender', gender);
        formData.append('university', university);
        formData.append('faculty', faculty);
        formData.append('applicantCv', applicantCv);
      

      } else {
        console.error('One or more form fields are null');
        return;
      }
    
      formData.append('applicantCv', this.fileToUpload!); // Assert non-null with !
    
      this.http.post<any>(`${this.apiUrl}JobApplicant/AddjobApplicant`, formData)
        .subscribe(
          (response) => {
            console.log('Application created successfully:', response);
            // Reset form after successful submission
            this.jobForm.reset();
          },
          (error: HttpErrorResponse) => {
            console.error('Error creating trainer:', error.error);
            // Handle error
          }
        );
    }



  ngOnInit(): void {

  }
}
