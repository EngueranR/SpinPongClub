import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [MessageService],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  loginError: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

  login() {
    this.authService.login(this.email, this.password).subscribe(
      (user) => {
        localStorage.setItem('token', user.token!);
        this.router.navigate(['/']);
        this.messageService.add({
          severity: 'success',
          summary: 'Connexion réussie',
          detail: 'Vous êtes maintenant connecté',
        });
      },
      (error) => {
        console.error('Login failed', error);
        this.loginError = 'Email ou mot de passe incorrect.';
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur de connexion',
          detail: this.loginError,
        });
        console.log(this.loginError);
      }
    );
  }
}
