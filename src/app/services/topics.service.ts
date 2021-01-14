import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/rest/v2/topics';//pasing the url of crud api (spring boot)

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  //httpclient 
  constructor(private http: HttpClient) { }

  //adding the crud functions fetch data from baseurl
  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }
  create(data:any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id:any, data:any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id:any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  get(id:any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }
}