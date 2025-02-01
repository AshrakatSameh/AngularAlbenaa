import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = environment.apiUrl;
  private basicURL = this.apiUrl + 'TechSupport/getAllTechSupports'

  constructor(private http:HttpClient) { }

  getAllJobs(){
    return this.http.get(this.basicURL)
  }
}
