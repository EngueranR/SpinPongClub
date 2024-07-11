import {Component, OnInit} from '@angular/core';
import {TournamentsService} from "../../../services/tournament.service";
import {Tournament} from "../../../models/tournament";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-administration-tournaments',
  templateUrl: './administration-tournaments.component.html',
  styleUrls: ['./administration-tournaments.component.scss'],
  providers: [MessageService]
})
export class AdministrationTournamentsComponent implements OnInit {
  clonedTournament: { [s: string]: Tournament } = {};

  tournaments!: Tournament[]

  constructor(
    private tournamentService: TournamentsService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.tournamentService.getTournaments().subscribe((res) => this.tournaments = res)
  }

  onRowEditInit(tournament: Tournament) {
    this.clonedTournament[tournament._id as string] = { ...tournament };
  }

  onRowEditSave(tournament: Tournament) {
    this.tournamentService.updateTournament(tournament._id as string, tournament).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'L\'enregistrement a bien été modifié'
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

  onRowEditCancel(tournament: Tournament, index: number) {
    delete this.clonedTournament[tournament._id as string];
  }

  onRowDelete(id: Tournament["_id"]) {
    console.log('delete', id)

    this.tournamentService.deleteTournament(id as string).subscribe()
  }
}
