import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { AuthService } from '../../services/auth.service';
import { News } from 'src/app/models/news';

@Component({
  selector: 'app-club',
  templateUrl: './club.page.html',
  styleUrls: ['./club.page.scss'],
})
export class ClubPage implements OnInit {
  news: News[] = [];
  isAdmin: boolean = false;
  newNews: News = { title: '', content: '' };

  constructor(
    private newsService: NewsService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.newsService.getNews().subscribe({
      next: (res) => {
        this.news = res;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.isAdmin = this.authService.isAdmin();
  }

  addNews() {
    this.newsService.addNews(this.newNews).subscribe({
      next: (res) => {
        this.news.push(res);
        this.newNews = { title: '', content: '' };
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteNews(id: string | undefined) {
    if (id === undefined) {
      console.error('ID is undefined');
      return;
    }
    this.newsService.deleteNews(id).subscribe({
      next: () => {
        this.news = this.news.filter((n) => n._id !== id);
      },
      error: (err) => {
        console.log(err);
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
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
