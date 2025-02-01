import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {

   private apiUrl:string = environment.apiUrl;
     private basicURL = this.apiUrl + 'Certificate/addCertificate'
   

  constructor(private http:HttpClient) { }

  getAllCertificates(){
    return this.http.get(`${this.apiUrl}Certificate`)
  }

    postCertificat(data: any): Observable<any> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post(this.basicURL, data, { headers });
  }

  deleteCertificateById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}Certificate/${id}`);
  }

}
