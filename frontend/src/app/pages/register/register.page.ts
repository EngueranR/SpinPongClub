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
  firstName: string = '';
  lastName: string = '';
  isValid: { [key: string]: boolean } = {
    username: true,
    email: true,
    password: true,
    firstName: true,
    lastName: true,
  };

  constructor(private authService: AuthService, private router: Router) {}

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
              this.router.navigate(['/']);
            },
            (loginError) => {
              console.error('Login failed', loginError);
            }
          );
        },
        (error) => {
          console.error('Registration failed', error);
        }
      );
    } else {
      console.error('Validation failed');
    }
  }
}
