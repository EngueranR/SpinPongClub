import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;
  registerForm!: FormGroup;
  mode: 'signup' | 'login' = 'login';

  constructor(private fb: FormBuilder, private userService: UsersService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onLogin(): void {
    const { username, password } = this.registerForm.value;
    if (this.loginForm.valid) {
      this.userService.login(username, password).subscribe({
        next: () => {
          console.log('Good');
        },
        error: () => {
          console.error('Pas good');
        },
      });
      console.log(this.loginForm.value);
    } else {
      console.log('Formulaire non valide');
    }
  }

  onRegister(): void {
    const { username, password, email } = this.registerForm.value;
    if (this.registerForm.valid) {
      this.userService.register(username, password, email).subscribe({
        next: () => {
          console.log('Good');
        },
        error: () => {
          console.error('Pas good');
        },
      });
    } else {
      console.log('Formulaire non valide');
    }
  }

  changeMode(): void {
    if (this.mode === 'signup') {
      this.mode = 'login';
    } else if (this.mode === 'login') {
      this.mode = 'signup';
    }
  }
}
