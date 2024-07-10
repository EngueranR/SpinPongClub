import { Component } from '@angular/core';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.page.html',
  styleUrls: ['./tournament.page.scss']
})
export class TournamentPage {
  participants: string[] = [
    'Yanis', 'Engueran', 'Gabin', 'Thomas', 'Arthur'
  ]
}
