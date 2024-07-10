import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private baseUrl: string= 'http://localhost:9000';

  constructor(private httpClient: HttpClient) { }

  getNews() {
    return this.httpClient.get(`${this.baseUrl}/api/news/`)
  }
}
