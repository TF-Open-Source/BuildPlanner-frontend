import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-account-profile',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    TranslateModule
  ],
  templateUrl: './account-profile.component.html',
  styleUrls: ['./account-profile.component.css']
})
export class AccountProfileComponent implements OnInit {
  profileForm!: FormGroup;
  isEditing = false;

  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      fullName: [{ value: 'Gonzalo Gonzales', disabled: true }, Validators.required],
      dni: [{ value: '12345678', disabled: true }, Validators.required],
      phone: ['987654321', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      age: [{ value: 28, disabled: true }, Validators.required],
      email: ['gonzalo@example.com', [Validators.required, Validators.email]],
      gender: ['Masculino', Validators.required]
    });
  }

  onEdit(): void {
    this.isEditing = true;
    this.profileForm.get('phone')?.enable();
    this.profileForm.get('email')?.enable();
    this.profileForm.get('gender')?.enable();
  }

  onSave(): void {
    if (this.profileForm.valid) {
      this.isEditing = false;
      this.profileForm.get('phone')?.disable();
      this.profileForm.get('email')?.disable();
      this.profileForm.get('gender')?.disable();

      this.snackBar.open('Cambios guardados correctamente.', 'Cerrar', {
        duration: 3000,
        panelClass: 'custom-snackbar',
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
    }
  }
}
