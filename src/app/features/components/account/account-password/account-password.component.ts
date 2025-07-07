import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-account-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    TranslateModule
  ],
  templateUrl: './account-password.component.html',
  styleUrls: ['./account-password.component.css']
})
export class AccountPasswordComponent {
  passwordForm: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.passwordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onChangePassword(): void {
    if (this.passwordForm.invalid) return;

    const { newPassword, confirmPassword } = this.passwordForm.value;

    if (newPassword !== confirmPassword) {
      this.passwordForm.setErrors({ mismatch: true });
      return;
    }

    this.snackBar.open('Contraseña actualizada correctamente', 'Cerrar', {
      duration: 3000,
      panelClass: 'custom-snackbar',
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });

    setTimeout(() => this.passwordForm.reset(), 100);
  }
}
