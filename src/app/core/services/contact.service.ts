import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  timestamp?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly apiUrl = 'http://localhost:8080/api/contact';

  constructor(private http: HttpClient) {}

  sendMessage(payload: ContactRequest): Observable<ContactResponse> {
    return this.http.post<ContactResponse>(this.apiUrl, payload);
  }

  checkHealth(): Observable<ContactResponse> {
    return this.http.get<ContactResponse>(`${this.apiUrl}/health`);
  }
}
