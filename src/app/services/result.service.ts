import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private apiUrl:string = environment.apiUrl

  private baseURL =`${this.apiUrl}Result/addResult`



  constructor(private http:HttpClient) { }

  getAllResults(){
    return this.http.get(`${this.apiUrl}Result/getAllResults`)
  }

  postResult(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseURL, data, { headers });
}
deleteResultById(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}Result/${id}`);
}
}
