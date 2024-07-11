import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl: string = 'http://localhost:9000';

  constructor(private http: HttpClient) {}

  public register(username: string, email: string, password: string) {
    return this.http.post(`${this.baseUrl}/register`, {
      username,
      email,
      password,
    });
  }

  public login(username: string, password: string) {
    return this.http.post(`${this.baseUrl}/login`, { username, password });
  }
}
