import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private apiUrl = 'http://localhost:9000/api/event';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrl);
  }

  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.apiUrl, event);
  }

  deleteEvent(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  addParticipant(eventId: string, participantId: string): Observable<Event> {
    return this.http.post<Event>(`${this.apiUrl}/${eventId}/participants`, {
      participantId,
    });
  }

  removeParticipant(eventId: string, participantId: string): Observable<Event> {
    return this.http.delete<Event>(`${this.apiUrl}/${eventId}/participants`, {
      body: { participantId },
    });
  }

  editEvent(id: string, event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.apiUrl}/${id}`, event);
  }
}
