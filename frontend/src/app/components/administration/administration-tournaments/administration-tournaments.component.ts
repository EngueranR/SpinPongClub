import { Component } from '@angular/core';

@Component({
  selector: 'app-administration-tournaments',
  templateUrl: './administration-tournaments.component.html',
  styleUrls: ['./administration-tournaments.component.scss']
})
export class AdministrationTournamentsComponent {
  tournaments: {id: number, name: string, startDate: Date, prize: number, maxParticipants: number }[] =
    [
      {id: 1, name: 'Tournois 1', startDate: new Date(), prize: 0, maxParticipants: 10},
      {id: 2, name: 'Tournois 2', startDate: new Date(), prize: 10, maxParticipants: 20},
      {id: 3, name: 'Tournois 3', startDate: new Date(), prize: 30, maxParticipants: 5}
    ]
}
