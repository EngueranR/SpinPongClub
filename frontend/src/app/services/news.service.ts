import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private baseUrl = 'http://localhost:9000/api/news';

  constructor(private http: HttpClient) {}

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(`${this.baseUrl}`);
  }

  addNews(news: News): Observable<News> {
    return this.http.post<News>(`${this.baseUrl}`, news);
  }

  deleteNews(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  editNews(id: string, news: News): Observable<News> {
    return this.http.put<News>(`${this.baseUrl}/${id}`, news);
  }
}
