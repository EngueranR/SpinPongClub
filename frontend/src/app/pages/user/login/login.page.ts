import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;
  signupForm!: FormGroup;
  mode: 'signup' | 'login' = 'login';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })

    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    })
  }

  onLogin(): void {
    if(this.loginForm.valid) {
      console.log(this.loginForm.value)
    } else {
      console.log('Formulaire non valide')
    }
  }

  onSignup(): void {
    if(this.signupForm.valid) {
      console.log(this.signupForm.value)
    } else {
      console.log('Formulaire non valide')
    }
  }

  changeMode(): void {
    if(this.mode === 'signup') {
      this.mode = 'login'
    } else if (this.mode === 'login') {
      this.mode = 'signup'
    }
  }
}
