import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tournament } from 'src/app/models/tournament';
import { AuthService } from 'src/app/services/auth.service';
import { TournamentsService } from 'src/app/services/tournament.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.page.html',
  styleUrls: ['./tournament.page.scss'],
  providers: [MessageService],
})
export class TournamentPage implements OnInit {
  tournaments: Tournament[] = [];
  isAdmin: boolean = false;
  currentUserId: string | undefined;
  newTournament: Tournament = {
    _id: '',
    name: '',
    startDate: new Date(),
    maxParticipants: 0,
    prize: '',
    participants: [],
  };

  constructor(
    private route: ActivatedRoute,
    private tournamentsService: TournamentsService,
    private userService: AuthService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.userService.isAdmin();
    const currentUser = localStorage.getItem('user') || undefined;
    this.currentUserId = JSON.parse(currentUser!)._id;
    this.fetchTournaments();
    console.log(this.currentUserId);
  }

  fetchTournaments(): void {
    this.tournamentsService.getTournaments().subscribe(
      (data: Tournament[]) => {
        console.log('Tournaments data received:', data);
        this.tournaments = data;
        this.messageService.add({
          severity: 'success',
          summary: 'Tournois récupérés',
          detail: 'Les données des tournois ont été récupérées avec succès.',
        });
      },
      (error) => {
        console.error('Error fetching tournaments data', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail:
            'Une erreur est survenue lors de la récupération des tournois.',
        });
      }
    );
  }

  createTournament(): void {
    this.tournamentsService.createTournament(this.newTournament).subscribe(
      (response) => {
        console.log('Tournament created successfully', response);
        this.fetchTournaments();
        this.messageService.add({
          severity: 'success',
          summary: 'Tournoi créé',
          detail: 'Le tournoi a été créé avec succès.',
        });
      },
      (error) => {
        console.error('Error creating tournament', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Une erreur est survenue lors de la création du tournoi.',
        });
      }
    );
  }

  deleteTournament(id: string): void {
    console.log('Attempting to delete tournament with ID:', id);
    if (!id) {
      console.error('Tournament ID is undefined');
      this.messageService.add({
        severity: 'error',
        summary: 'Erreur',
        detail: "L'ID du tournoi est indéfini.",
      });
      return;
    }
    this.tournamentsService.deleteTournament(id).subscribe(
      (response) => {
        console.log('Tournament deleted successfully', response);
        this.fetchTournaments();
        this.messageService.add({
          severity: 'success',
          summary: 'Tournoi supprimé',
          detail: 'Le tournoi a été supprimé avec succès.',
        });
      },
      (error) => {
        console.error('Error deleting tournament', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Une erreur est survenue lors de la suppression du tournoi.',
        });
      }
    );
  }

  registerForTournament(id: string): void {
    console.log('Attempting to register for tournament with ID:', id);
    if (!id || !this.currentUserId) {
      console.error('Tournament ID or User ID is undefined');
      this.messageService.add({
        severity: 'error',
        summary: 'Erreur',
        detail: "L'ID du tournoi ou de l'utilisateur est indéfini.",
      });
      return;
    }
    this.tournamentsService.addParticipant(id, this.currentUserId).subscribe(
      (response) => {
        console.log('Registered for tournament successfully', response);
        this.fetchTournaments();
        this.messageService.add({
          severity: 'success',
          summary: 'Inscription réussie',
          detail: 'Vous êtes inscrit au tournoi avec succès.',
        });
      },
      (error) => {
        console.error('Error registering for tournament', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: "Une erreur est survenue lors de l'inscription au tournoi.",
        });
      }
    );
  }
}
