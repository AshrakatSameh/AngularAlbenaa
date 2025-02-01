import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class JobsService  {

  private temp = environment.apiUrl;
  private apiURL = this.temp + 'Job/addjob';
  private basicURL = this.temp + 'Job'

  constructor(private http:HttpClient) { }

  getAllJobs(){
    return this.http.get(this.temp + 'Job/getAllJobs')
  }

  postJob(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiURL, data, { headers });
}

deleteJobById(id: number): Observable<void> {
  return this.http.delete<void>(`${this.basicURL}/${id}`);
}
}
