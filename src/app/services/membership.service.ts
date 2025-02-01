import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  private apiUrl:string = environment.apiUrl

  private baseURL =`${this.apiUrl}Membership/CreateMembershipApplicant`



  constructor(private http:HttpClient) { }

  getMembershipApplicant(){
    return this.http.get(`${this.apiUrl}Membership/MembershipApplicant`)
  }

  postMembershipApplicant(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseURL, data, { headers });
}
}
