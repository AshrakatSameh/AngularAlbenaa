import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class InternProblemsService {

  private temp = environment.apiUrl;
  private basicURL = this.temp + 'InternProblems/InternProblems'

  constructor(private http:HttpClient) { }

  getAllInternProblems(){
    return this.http.get(this.basicURL)
  }
}
