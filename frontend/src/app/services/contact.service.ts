import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'http://localhost:9000/api/contact';

  constructor(private http: HttpClient) {}

  createContact(contact: Contact): Observable<Event> {
    return this.http.post<Event>(this.apiUrl, contact);
  }
}
