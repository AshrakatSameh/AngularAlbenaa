import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private temp = environment.apiUrl;
  private baseUrl : string = this.temp + 'User/';

  private apiUrl : string = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getUsers(){
    return this.http.get<any>(this.baseUrl);
  }

  addConstructionFound(con: any): Observable<any> {
    console.log(con);
    return this.http.post<any>(`${this.apiUrl +'ConstructionFound'}/createConstructionOfEnrollment`,con)

  }
}
