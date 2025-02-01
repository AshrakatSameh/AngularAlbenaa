import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  private temp = environment.apiUrl;
  constructor(private http:HttpClient) { }

  getAllTrainings(){
    return this.http.get(this.temp + 'Trainings/getAllTrainings')

  }
}
