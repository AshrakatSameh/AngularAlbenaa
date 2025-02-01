import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class JobApplicantService {

  private apiUrl:string = environment.apiUrl;
  private baseURL =`${this.apiUrl}JobApplicant/AddjobApplicant`



  constructor(private http:HttpClient) { }

  getAllJobApplicant(){
    return this.http.get(`${this.apiUrl}JobApplicant/getAllApplicants`)
  }

  postJobApplicant(data: any): Observable<any> {
    const formData = new FormData();
    for (const key of Object.keys(data)) {
      formData.append(key, data[key]);
    }
    return this.http.post(this.baseURL, formData);
}
}
