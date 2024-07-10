import {Component, OnInit} from '@angular/core';
import {NewsService} from "../../services/news.service";

@Component({
  selector: 'app-club',
  templateUrl: './club.page.html',
  styleUrls: ['./club.page.scss'],
})
export class ClubPage implements OnInit {
  news: { title: string, content: string, createdAt: Date }[] = [
    {
      title: 'Actualité 1',
      content: 'Nouvel évènement',
      createdAt: new Date(),
    },
    {
      title: 'Actualité 2',
      content: 'Nouvel évènement 2',
      createdAt: new Date(),
    }
  ]

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews().subscribe({
      next:(res) => {
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
