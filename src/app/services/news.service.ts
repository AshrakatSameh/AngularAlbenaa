import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private temp = environment.apiUrl;
  constructor(private http:HttpClient) { }

  private apiURL = this.temp + 'News/addNews';
  private basicURL = this.temp + 'News';




 
  getAllNews(){
    return this.http.get(this.temp + 'News/getAllNews')

  }

  postNews(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiURL, data, { headers });
}


postData(title: string, description: string, image: File): Observable<any> {
  const formData: FormData = new FormData();
  formData.append('Title', title);
  formData.append('Description', description);
  formData.append('Image', image, image.name);
  
  return this.http.post<any>(this.temp + 'News/addNews', formData);
}


deleteNewsById(id: number): Observable<void> {
  return this.http.delete<void>(`${this.basicURL}/${id}`);
}

updateNewsById(id: number, data: any): Observable<void> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.put<void>(`${this.basicURL}/${id}`, data, { headers });
}


}
