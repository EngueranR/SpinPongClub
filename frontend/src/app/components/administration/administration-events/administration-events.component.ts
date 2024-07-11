import { Component } from '@angular/core';
import { Event } from '../../../models/event';
import { EventService } from '../../../services/event.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-administration-events',
  templateUrl: './administration-events.component.html',
  styleUrls: ['./administration-events.component.scss'],
  providers: [MessageService],
})
export class AdministrationEventsComponent {
  clonedTournament: { [s: string]: Event } = {};

  events!: Event[];

  constructor(
    private eventService: EventService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventService.getEvents().subscribe({
      next: (res) => {
        this.events = res;
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary:
            'Une erreur est survenue lors de la récupération des évènements',
          detail: error,
        });
      },
    });
  }

  onRowEditInit(event: Event) {
    this.clonedTournament[event._id as string] = { ...event };
  }

  onRowEditSave(event: Event) {
    this.eventService.editEvent(event._id as string, event).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: "L'évènement a bien été modifié",
        });
      },
      error: (error) => {
        this.messageService.add({
          severity: 'success',
          summary:
            "Une erreur est survenue lors de la modification de l'évènement",
          detail: error,
        });
      },
    });
  }

  onRowEditCancel(event: Event, index: number) {
    delete this.clonedTournament[event._id as string];
  }

  onRowDelete(event: Event) {
    this.eventService.deleteEvent(event._id as string).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: "L'évènement a bien été supprimé",
        });
      },
      error: (error) => {
        this.messageService.add({
          severity: 'success',
          summary:
            "Une erreur est survenue lors de la suppression de l'évènement",
          detail: error,
        });
      },
      complete: () => {
        this.getEvents();
      },
    });
  }
}
