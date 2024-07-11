import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tournament } from 'src/app/models/tournament';
import { AuthService } from 'src/app/services/auth.service';
import { TournamentsService } from 'src/app/services/tournament.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.page.html',
  styleUrls: ['./tournament.page.scss'],
})
export class TournamentPage implements OnInit {
  tournaments: Tournament[] = [];
  isAdmin: boolean = false;
  currentUserId: string | undefined;
  newTournament: Tournament = {
    _id: '',
    name: '',
    startDate: '',
    maxParticipants: null,
    prize: '',
    participants: [],
  };

  constructor(
    private route: ActivatedRoute,
    private tournamentsService: TournamentsService,
    private userService: AuthService
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
      },
      (error) => {
        console.error('Error fetching tournaments data', error);
      }
    );
  }

  createTournament(): void {
    this.tournamentsService.createTournament(this.newTournament).subscribe(
      (response) => {
        console.log('Tournament created successfully', response);
        this.fetchTournaments();
      },
      (error) => {
        console.error('Error creating tournament', error);
      }
    );
  }

  deleteTournament(id: string): void {
    console.log('Attempting to delete tournament with ID:', id);
    if (!id) {
      console.error('Tournament ID is undefined');
      return;
    }
    this.tournamentsService.deleteTournament(id).subscribe(
      (response) => {
        console.log('Tournament deleted successfully', response);
        this.fetchTournaments();
      },
      (error) => {
        console.error('Error deleting tournament', error);
      }
    );
  }

  registerForTournament(id: string): void {
    console.log('Attempting to register for tournament with ID:', id);
    if (!id || !this.currentUserId) {
      console.error('Tournament ID or User ID is undefined');
      return;
    }
    this.tournamentsService.addParticipant(id, this.currentUserId).subscribe(
      (response) => {
        console.log('Registered for tournament successfully', response);
        this.fetchTournaments();
      },
      (error) => {
        console.error('Error registering for tournament', error);
      }
    );
  }
}
