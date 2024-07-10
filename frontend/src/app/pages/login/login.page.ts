import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe(
      (user) => {
        localStorage.setItem('token', user.token!);
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Login failed', error);
        this.loginError = 'Email ou mot de passe incorrect.';
        console.log(this.loginError);
      }
    );
  }
}
