import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/models/event';
import { AuthService } from 'src/app/services/auth.service';
import { EventService } from 'src/app/services/event.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-event',
  templateUrl: './evenement.page.html',
  styleUrls: ['./evenement.page.scss'],
  providers: [MessageService],
})
export class EvenementPage implements OnInit {
  events: Event[] = [];
  isAdmin: boolean = false;
  currentUserId: string | undefined;
  newEvent: Omit<Event, '_id'> = {
    title: '',
    description: '',
    startDate: new Date(),
    participants: [],
  };

  constructor(
    private eventsService: EventService,
    private userService: AuthService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.userService.isAdmin();
    const currentUser = localStorage.getItem('user') || undefined;
    this.currentUserId = JSON.parse(currentUser!)._id;
    this.fetchEvents();
    console.log(this.currentUserId);
  }

  fetchEvents(): void {
    this.eventsService.getEvents().subscribe(
      (data: Event[]) => {
        console.log('Events data received:', data);
        this.events = data;
      },
      (error) => {
        console.error('Error fetching events data', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail:
            'Une erreur est survenue lors de la récupération des événements',
        });
      }
    );
  }

  createEvent(): void {
    this.eventsService.createEvent(this.newEvent).subscribe(
      (response) => {
        console.log('Event created successfully', response);
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: "L'événement a été créé avec succès",
        });
        this.fetchEvents();
      },
      (error) => {
        console.error('Error creating event', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: "Une erreur est survenue lors de la création de l'événement",
        });
      }
    );
  }

  deleteEvent(id: string): void {
    console.log('Attempting to delete event with ID:', id);
    if (!id) {
      console.error('Event ID is undefined');
      this.messageService.add({
        severity: 'error',
        summary: 'Erreur',
        detail: "L'ID de l'événement est indéfini",
      });
      return;
    }
    this.eventsService.deleteEvent(id).subscribe(
      (response) => {
        console.log('Event deleted successfully', response);
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: "L'événement a été supprimé avec succès",
        });
        this.fetchEvents();
      },
      (error) => {
        console.error('Error deleting event', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail:
            "Une erreur est survenue lors de la suppression de l'événement",
        });
      }
    );
  }

  registerForEvent(id: string): void {
    console.log('Attempting to register for event with ID:', id);
    if (!id || !this.currentUserId) {
      console.error('Event ID or User ID is undefined');
      this.messageService.add({
        severity: 'error',
        summary: 'Erreur',
        detail: "L'ID de l'événement ou de l'utilisateur est indéfini",
      });
      return;
    }
    this.eventsService.addParticipant(id, this.currentUserId).subscribe(
      (response) => {
        console.log('Registered for event successfully', response);
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: "Inscription à l'événement réussie",
        });
        this.fetchEvents();
      },
      (error) => {
        console.error('Error registering for event', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: "Une erreur est survenue lors de l'inscription à l'événement",
        });
      }
    );
  }
}
