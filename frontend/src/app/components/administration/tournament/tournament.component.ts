import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss'],
  providers: [MessageService]
})
export class TournamentComponent implements OnInit  {
  tournamentForm!: FormGroup;
  name!: string;

  constructor(private messageService: MessageService) {  }

  ngOnInit() {
    this.tournamentForm = new FormGroup({
      dates: new FormControl<Date | null>(null),
      name: new FormControl<string | null>(null)
    })
  }

  test() {
      this.messageService.add({
        severity: 'success',
        detail: 'Le tournoi a bien été ajouté'
      })
    console.log(this.tournamentForm.get('dates'))
  }

}
