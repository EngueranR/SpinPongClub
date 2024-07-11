import { Component } from '@angular/core';
import {NewsService} from "../../../services/news.service";

interface News {
  id: string,
  title: string,
  content: string,
}

@Component({
  selector: 'app-administration-news',
  templateUrl: './administration-news.component.html',
  styleUrls: ['./administration-news.component.scss']
})
export class AdministrationNewsComponent {
  clonedTournament: { [s: string]: News } = {};

  news: News[] =
    [
      {id: '1', title: 'Title 1', content: 'news 1'},
      {id: '2', title: 'Title 2', content: 'news 2'},
      {id: '3', title: 'Title 3', content: 'news 3'},
    ]

  constructor(private newsService: NewsService) {
  }

  onRowEditInit(news: News) {
    this.clonedTournament[news.id] = { ...news };
  }

  onRowEditSave(news: News) {
    console.log(news)
    //Call API pour modifier le tournoi
  }

  onRowEditCancel(news: News, index: number) {
    delete this.clonedTournament[news.id];
  }

  onRowDelete(news: News) {
    this.newsService.deleteNews(news.id)
  }
}
