import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DirectionService } from 'src/app/shared/direction.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-problem-intern',
  templateUrl: './problem-intern.component.html',
  styleUrls: ['./problem-intern.component.css']
})
export class ProblemInternComponent {

  formData: any = {}; // Object to hold form data
  api = environment.apiUrl;
  constructor(private http: HttpClient ,public directionService: DirectionService) {}

  submitForm(): void {
    // Send form data to API
    this.http.post(`${this.api}InternProblems/CreateInternProblem`, this.formData)
      .subscribe(response => {
        console.log('Form submitted successfully:', response);
        alert('تم الارسال')
        // Optionally, reset the form after successful submission
        this.resetForm();
      }, error => {
        alert('خطا في الارسال')
      });
  }

  resetForm(): void {
    // Clear form data
    this.formData = {};
  }

}
