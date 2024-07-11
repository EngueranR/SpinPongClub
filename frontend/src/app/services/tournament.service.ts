import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tournament} from "../models/tournament";

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  private baseUrl = 'http://localhost:9000/api/tournaments';

  constructor(private http: HttpClient) {}

  getTournaments(): Observable<Tournament[]> {
    return this.http.get<Tournament[]>(`${this.baseUrl}`);
  }

  addTournament(tournament: Tournament): Observable<Tournament> {
    return this.http.post<Tournament>(`${this.baseUrl}`, tournament);
  }

  deleteTournament(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  editTournament(id: string, tournament: Tournament): Observable<Tournament> {
    return this.http.put<Tournament>(`${this.baseUrl}/${id}`, tournament);
  }
}
