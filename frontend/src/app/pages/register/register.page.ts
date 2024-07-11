import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  providers: [MessageService],
})
export class RegisterPage {
  username: string = '';
  email: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  isValid: { [key: string]: boolean } = {
    username: true,
    email: true,
    password: true,
    firstName: true,
    lastName: true,
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

  validateInputs(): boolean {
    this.isValid['username'] = !!this.username;
    this.isValid['email'] = !!this.email && /\S+@\S+\.\S+/.test(this.email);
    this.isValid['password'] = !!this.password;
    this.isValid['firstName'] = !!this.firstName;
    this.isValid['lastName'] = !!this.lastName;
    return (
      this.isValid['username'] &&
      this.isValid['email'] &&
      this.isValid['password'] &&
      this.isValid['firstName'] &&
      this.isValid['lastName']
    );
  }

  register() {
    if (this.validateInputs()) {
      const newUser: User = new User(
        this.username,
        this.email,
        this.password,
        this.firstName,
        this.lastName
      );
      this.authService.register(newUser).subscribe(
        (user) => {
          this.authService.login(this.email, this.password).subscribe(
            (loginUser) => {
              localStorage.setItem('token', loginUser.token!);
              this.messageService.add({
                severity: 'success',
                summary: 'Inscription réussie',
                detail: 'Vous êtes maintenant inscrit et connecté',
              });
              this.router.navigate(['/']);
            },
            (loginError) => {
              console.error('Login failed', loginError);
              this.messageService.add({
                severity: 'error',
                summary: 'Erreur de connexion',
                detail: 'Inscription réussie, mais la connexion a échoué',
              });
            }
          );
        },
        (error) => {
          console.error('Registration failed', error);
          this.messageService.add({
            severity: 'error',
            summary: "Erreur d'inscription",
            detail: "Une erreur est survenue lors de l'inscription",
          });
        }
      );
    } else {
      console.error('Validation failed');
      this.messageService.add({
        severity: 'warn',
        summary: 'Validation échouée',
        detail: 'Veuillez vérifier les champs du formulaire',
      });
    }
  }
}
