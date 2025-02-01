import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CourseProblemsService {
  private apiUrl = environment.apiUrl;
  private basicURL = this.apiUrl + 'CourseProblems/CourseProblems'

  constructor(private http:HttpClient) { }

  getAllCourseProblems(){
    return this.http.get(this.basicURL)
  }
}
