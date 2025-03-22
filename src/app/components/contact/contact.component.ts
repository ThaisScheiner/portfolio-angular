import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from './services/contact.service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;
  private dialog = inject(MatDialog);

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.contactService.sendEmail(this.contactForm.value).subscribe({
        next: () => {
          this.contactForm.reset();
          this.openDialog('Mensagem de contato enviada com sucesso!');
        },
        error: () => {
          this.openDialog('Erro ao enviar mensagem. Tente novamente.');
        }
      });
    }
  }

  openDialog(message: string) {
    this.dialog.open(DialogComponent, {
      data: { message }
    });
  }
}
