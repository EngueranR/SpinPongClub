import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:9000/api/auth';
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient) {}

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  isAdmin(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.isAdmin;
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/register`, user).pipe(
      tap((user) => {
        localStorage.setItem('token', user.token!);
        localStorage.setItem('user', JSON.stringify(user));
        this.loggedIn.next(true);
      })
    );
  }

  login(email: string, password: string): Observable<User> {
    return this.http
      .post<User>(`${this.baseUrl}/login`, { email, password })
      .pipe(
        tap((user) => {
          localStorage.setItem('token', user.token!);
          localStorage.setItem('user', JSON.stringify(user));
          this.loggedIn.next(true);
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.loggedIn.next(false);
  }
}
