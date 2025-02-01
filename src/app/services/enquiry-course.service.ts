import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EnquiryCourseService {

  private apiUrl:string = environment.apiUrl

  private baseURL =`${this.apiUrl}CourseAskInfo/addCourseAsk`



  constructor(private http:HttpClient) { }

  getAllCourseAskInfo(){
    return this.http.get(`${this.apiUrl}CourseAskInfo/getAllCourseAsks`)
  }

  postCourseAskInfo(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseURL, data, { headers });
}
}
