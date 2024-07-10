import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  contactForm!: FormGroup;

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl<string>('', [Validators.required]),
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      message: new FormControl<string>('', [Validators.required]),
    })
  }

  submitForm() {
    if(this.contactForm.valid) {
      console.log('Ok :', this.contactForm)
    } else {
      console.error('Formulaire non valide')
    }
  }
}
