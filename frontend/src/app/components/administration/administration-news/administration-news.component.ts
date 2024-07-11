import {Component, OnInit} from '@angular/core';
import {NewsService} from "../../../services/news.service";
import {News} from "../../../models/news";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-administration-news',
  templateUrl: './administration-news.component.html',
  styleUrls: ['./administration-news.component.scss'],
  providers: [MessageService]
})
export class AdministrationNewsComponent implements OnInit {
  clonedTournament: { [s: string]: News } = {};

  news!: News[]

  constructor(private newsService: NewsService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.getNews()
  }

  getNews() {
    this.newsService.getNews().subscribe({
      next: (res) => {
        this.news = res
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Une erreur est survenue lors de la récupération des news',
          detail: error
        })
      }
    })
  }

  onRowEditInit(news: News) {
    this.clonedTournament[news._id as string] = { ...news };
  }

  onRowEditSave(news: News) {
    this.newsService.editNews(news._id as string, news).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          detail: 'L\'enregistrement a bien été modifié'
        })
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Une erreur est survenue lors de la modification de l\'enregistrement',
          detail: error
        })
      }
    })
  }

  onRowEditCancel(news: News, index: number) {
    delete this.clonedTournament[news._id as string];
  }

  onRowDelete(news: News) {
    this.newsService.deleteNews(news._id as string).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          detail: 'L\'enregistrement a bien été supprimé'
        })
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Une erreur est survenue lors de la suppression de l\'enregistrement',
          detail: error
        })
      },
      complete: () => {
        this.getNews()
      }
    })
  }
}
