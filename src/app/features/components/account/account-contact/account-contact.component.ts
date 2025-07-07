import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-account-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    TranslateModule
  ],
  templateUrl: './account-contact.component.html',
  styleUrls: ['./account-contact.component.css']
})
export class AccountContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });

  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.snackBar.open('Mensaje enviado correctamente', 'Cerrar', { duration: 3000, panelClass: 'custom-snackbar',
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
      this.contactForm.reset();
    }
  }

}
