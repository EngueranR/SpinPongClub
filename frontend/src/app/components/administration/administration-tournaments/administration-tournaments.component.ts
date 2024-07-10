import {Component, OnInit} from '@angular/core';

interface Tournament  {
  id: number,
  name: string,
  startDate: Date,
  prize: number,
  maxParticipants: number
}

@Component({
  selector: 'app-administration-tournaments',
  templateUrl: './administration-tournaments.component.html',
  styleUrls: ['./administration-tournaments.component.scss']
})
export class AdministrationTournamentsComponent implements OnInit {
  clonedTournament: { [s: number]: Tournament } = {};

  tournaments: Tournament[] =
    [
      {id: 1, name: 'Tournois 1', startDate: new Date(), prize: 0, maxParticipants: 10},
      {id: 2, name: 'Tournois 2', startDate: new Date(), prize: 10, maxParticipants: 20},
      {id: 3, name: 'Tournois 3', startDate: new Date(), prize: 30, maxParticipants: 5}
    ]

  ngOnInit() {
    //call API pour récupérer les tournois
  }

  onRowEditInit(tournament: Tournament) {
    this.clonedTournament[tournament.id] = { ...tournament };
  }

  onRowEditSave(tournament: Tournament) {
    console.log(tournament)
    //Call API pour modifier le tournoi
  }

  onRowEditCancel(tournament: Tournament, index: number) {
    delete this.clonedTournament[tournament.id];
  }
}
