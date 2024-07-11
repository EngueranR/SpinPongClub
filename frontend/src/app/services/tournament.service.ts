import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tournament } from '../models/tournament';

@Injectable({
  providedIn: 'root',
})
export class TournamentsService {
  private apiUrl = 'http://localhost:9000/api/tournaments';

  constructor(private http: HttpClient) {}

  getTournaments(): Observable<Tournament[]> {
    return this.http.get<Tournament[]>(this.apiUrl);
  }

  getTournament(id: string): Observable<Tournament> {
    return this.http.get<Tournament>(`${this.apiUrl}/${id}`);
  }

  createTournament(tournament: Tournament): Observable<Tournament> {
    return this.http.post<Tournament>(this.apiUrl, tournament);
  }

  updateTournament(id: string, tournament: Tournament): Observable<Tournament> {
    return this.http.put<Tournament>(`${this.apiUrl}/${id}`, tournament);
  }

  deleteTournament(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  addParticipant(id: string, participantId: string): Observable<Tournament> {
    return this.http.post<Tournament>(`${this.apiUrl}/${id}/participants`, {
      participantId,
    });
  }
}
