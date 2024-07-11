import { Component } from '@angular/core';

interface Event {
  id: string,
  title: string,
  description: string,
  startDate: Date,
}

@Component({
  selector: 'app-administration-events',
  templateUrl: './administration-events.component.html',
  styleUrls: ['./administration-events.component.scss']
})
export class AdministrationEventsComponent {
  clonedTournament: { [s: string]: Event } = {};

  events: Event[] =
    [
      {id: '1', title: 'Title 1', description: 'event 1', startDate: new Date()},
      {id: '2', title: 'Title 2', description: 'event 2', startDate: new Date()},
      {id: '3', title: 'Title 3', description: 'event 3', startDate: new Date()},
    ]

  ngOnInit() {
    //call API pour récupérer les tournois
  }

  onRowEditInit(event: Event) {
    this.clonedTournament[event.id] = { ...event };
  }

  onRowEditSave(event: Event) {
    console.log(event)
    //Call API pour modifier le tournoi
  }

  onRowEditCancel(event: Event, index: number) {
    delete this.clonedTournament[event.id];
  }

  onRowDelete(event: Event) {
    //call api pour supprimer un event
  }
}
