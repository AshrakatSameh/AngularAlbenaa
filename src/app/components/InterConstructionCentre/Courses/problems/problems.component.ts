import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DirectionService } from 'src/app/shared/direction.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent {
  formData: any = {}; // Object to hold form data
  api = environment.apiUrl;
  constructor(private http: HttpClient ,public directionService: DirectionService) {}

  submitForm(): void {
    // Send form data to API
    this.http.post(`${this.api}CourseProblems/CreateCourseProblem`, this.formData)
      .subscribe(response => {
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
