import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private temp = environment.apiUrl;
  private apiURL = this.temp + 'Courses/addCourse'
  private basicURL = this.temp + 'Courses'


  constructor(private http:HttpClient) { }

  getAllCourses(){
    return this.http.get(this.temp + 'Courses/getAllCourses')
  }

  postCourse(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiURL, data, { headers });
}

deleteCourseById(id: number): Observable<void> {
  return this.http.delete<void>(`${this.basicURL}/${id}`);
}


}
