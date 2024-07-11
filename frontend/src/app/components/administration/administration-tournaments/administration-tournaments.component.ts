import {Component, OnInit} from '@angular/core';
import {TournamentService} from "../../../services/tournament.service";
import {Tournament} from "../../../models/tournament";

@Component({
  selector: 'app-administration-tournaments',
  templateUrl: './administration-tournaments.component.html',
  styleUrls: ['./administration-tournaments.component.scss']
})
export class AdministrationTournamentsComponent implements OnInit {
  clonedTournament: { [s: string]: Tournament } = {};

  tournaments!: Tournament[]

  constructor(private tournamentService: TournamentService) {}

  ngOnInit() {
    this.tournamentService.getTournaments().subscribe((res) => this.tournaments = res)
  }

  onRowEditInit(tournament: Tournament) {
    this.clonedTournament[tournament._id as string] = { ...tournament };
  }

  onRowEditSave(tournament: Tournament) {
    console.log('called')

    this.tournamentService.editTournament(tournament._id as string, tournament).subscribe()

  }

  onRowEditCancel(tournament: Tournament, index: number) {
    delete this.clonedTournament[tournament._id as string];
  }

  onRowDelete(id: Tournament["_id"]) {
    this.tournamentService.deleteTournament(id as string)
  }
}
