import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl : string = environment.apiUrl;
  private userPayload: any;
  constructor(private http : HttpClient, private router: Router) { 
     this.userPayload = this.decodedToken();
  }

  signUp(userObj:any){
    return this.http.post<any>(`${this.apiUrl +'User'}/register`, userObj)
  }

  logIn(logInObj:any){
    return this.http.post<any>(`${this.apiUrl +'User'}/authenticate`,logInObj)
  }
 
  singOut(){
    localStorage.clear();
    //localStorage.removeItem('token');
    this.router.navigate(['login'])
  }

  storeToken(tokenValue: string){
    localStorage.setItem('token', tokenValue)
  }

  getToken(){
    return localStorage.getItem('token')
  }
  isLoggedIn(): boolean{
    return !!localStorage.getItem('token')
  }


  decodedToken(){
    const jwtHelper = new JwtHelperService();
    const token = this.getToken()!;
    // console.log(jwtHelper.decodeToken(token))
    return jwtHelper.decodeToken(token)
  }

  getFullNameFromToken(){
    if(this.userPayload)
      return this.userPayload.unique_name;
  }

  getRoleFromToken(){
    if(this.userPayload)
      return this.userPayload.role;
  }

}


