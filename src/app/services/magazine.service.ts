import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MagazineService {

  private temp = environment.apiUrl;
  private apiURL = this.temp + 'Magazine/addMagazine'
  private basicURL = this.temp + 'Magazine'


  constructor(private http:HttpClient) { }


  getAllMagazines(){
    return this.http.get(this.temp + 'Magazine/getAllMagazines')

  }

  postMagazine(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiURL, data, { headers });
}

deleteMagazineById(id: number): Observable<void> {
  return this.http.delete<void>(`${this.basicURL}/${id}`);
}

updateMagazineById(id: number, data: any): Observable<void> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.put<void>(`${this.basicURL}/${id}`, data, { headers });
}
  
}
