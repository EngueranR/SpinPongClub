import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    const newUser: User = new User(
      '',
      this.username,
      this.email,
      this.password
    );
    this.authService.register(newUser).subscribe(
      (user) => {
        localStorage.setItem('token', user.token!);
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Registration failed', error);
      }
    );
  }
}
