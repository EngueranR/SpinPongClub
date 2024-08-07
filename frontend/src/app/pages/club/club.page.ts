import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { AuthService } from '../../services/auth.service';
import { News } from 'src/app/models/news';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-club',
  templateUrl: './club.page.html',
  styleUrls: ['./club.page.scss'],
  providers: [MessageService],
})
export class ClubPage implements OnInit {
  news: News[] = [];
  isAdmin: boolean = false;
  newNews: News = { title: '', content: '' };

  constructor(
    private newsService: NewsService,
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.newsService.getNews().subscribe({
      next: (res) => {
        this.news = res;
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Une erreur est survenue lors de la récupération des news',
        });
      },
    });

    this.isAdmin = this.authService.isAdmin();
  }

  addNews() {
    this.newsService.addNews(this.newNews).subscribe({
      next: (res) => {
        this.news.push(res);
        this.newNews = { title: '', content: '' };
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'La nouvelle news a été ajoutée avec succès',
        });
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: "Une erreur est survenue lors de l'ajout de la news",
        });
      },
    });
  }

  deleteNews(id: string | undefined) {
    if (id === undefined) {
      this.messageService.add({
        severity: 'error',
        summary: 'Erreur',
        detail: "L'ID est indéfini",
      });
      return;
    }
    this.newsService.deleteNews(id).subscribe({
      next: () => {
        this.news = this.news.filter((n) => n._id !== id);
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'La news a été supprimée avec succès',
        });
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Une erreur est survenue lors de la suppression de la news',
        });
      },
    });
  }

  editNews(news: News) {
    const updatedTitle = prompt('Modifier le titre:', news.title);
    const updatedContent = prompt('Modifier le contenu:', news.content);

    if (updatedTitle !== null && updatedContent !== null) {
      const updatedNews: News = {
        ...news,
        title: updatedTitle,
        content: updatedContent,
      };

      this.newsService.editNews(news._id!, updatedNews).subscribe({
        next: (updated) => {
          const index = this.news.findIndex((n) => n._id === news._id);
          if (index !== -1) {
            this.news[index] = updated;
            this.messageService.add({
              severity: 'success',
              summary: 'Succès',
              detail: 'La news a été modifiée avec succès',
            });
          }
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erreur',
            detail:
              'Une erreur est survenue lors de la modification de la news',
          });
        },
      });
    }
  }
}
