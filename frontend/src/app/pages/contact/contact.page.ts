import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './../../services/contact.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  providers: [MessageService],
})
export class ContactPage implements OnInit {
  contactForm!: FormGroup;

  constructor(
    private contactService: ContactService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    });
  }

  submitForm() {
    console.log(this.contactForm.value);
    if (this.contactForm.valid) {
      this.contactService.createContact(this.contactForm.value).subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Succès',
            detail: 'Votre message a été envoyé avec succès',
          });
          this.contactForm.reset();
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erreur',
            detail: "Une erreur est survenue lors de l'envoi de votre message",
          });
        },
      });
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Attention',
        detail: "Le formulaire n'est pas valide, veuillez vérifier les champs",
      });
    }
  }
}
