import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CourseApplicantService {

  private apiUrl:string = environment.apiUrl

  private baseURL =`${this.apiUrl}CourseApplicant/addCourseApplicant`



  constructor(private http:HttpClient) { }

  getAllCoursepplicant(){
    return this.http.get(`${this.apiUrl}CourseApplicant/getAllCourseApplicants`)
  }

  postCourseApplicant(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseURL, data, { headers });
}
}
