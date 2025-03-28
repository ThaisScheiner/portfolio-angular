import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:3000/send-email'; // URL do backend

  constructor(private http: HttpClient) {}

  sendEmail(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
