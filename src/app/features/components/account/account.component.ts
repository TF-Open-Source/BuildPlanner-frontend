import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIcon,
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
    TranslatePipe
  ],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  profileForm!: FormGroup;
  aliasValue: string = '';
  isEditingAlias = false;
  isEditingPhoto = false;
  isEditing = false;

  profileImageUrl: string = 'assets/image/foto_perfil.jpg';
  customPhotoLoaded = false;
  tempImage: string | null = null;

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    const storedAlias = localStorage.getItem('userAlias') || 'Gonzalo Gonzales';
    const storedPhone = localStorage.getItem('userPhone') || '987087123';
    const storedEmail = localStorage.getItem('userEmail') || 'Gonza1234@gmail.com';
    const storedGender = localStorage.getItem('userGender') || 'Masculino';
    const savedImage = localStorage.getItem('profileImage');
    const isCustom = localStorage.getItem('customPhoto') === 'true';

    if (savedImage && isCustom) {
      this.profileImageUrl = savedImage;
      this.customPhotoLoaded = true;
    }

    this.aliasValue = storedAlias;

    this.profileForm = this.fb.group({
      alias: [storedAlias, Validators.required],
      fullName: [{ value: 'Gonzalo Luis Gonzales Castillo', disabled: true }],
      dni: [{ value: '06782346', disabled: true }],
      phone: [storedPhone, [Validators.required, Validators.pattern(/^\d{9}$/)]],
      age: [{ value: 35, disabled: true }],
      email: [storedEmail, [Validators.required, Validators.email]],
      gender: [storedGender, Validators.required]
    });
  }

  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
  }

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.tempImage = reader.result as string;
        this.profileImageUrl = this.tempImage;
      };
      reader.readAsDataURL(file);
    }
  }

  removeProfileImage(): void {
    this.profileImageUrl = 'assets/profile-placeholder.png';
    this.customPhotoLoaded = false;
    localStorage.removeItem('profileImage');
    localStorage.removeItem('customPhoto');
  }

  togglePhotoEdit(): void {
    this.isEditingPhoto = !this.isEditingPhoto;
  }

  onEditAlias(): void {
    this.isEditingAlias = true;
  }

  onSaveAlias(): void {
    const alias = this.profileForm.get('alias')?.value;
    if (alias && alias.trim().length > 0) {
      localStorage.setItem('userAlias', alias);
      this.aliasValue = alias;
      this.snackBar.open('Sobrenombre actualizado', 'Cerrar', {
        duration: 3000,
        panelClass: 'custom-snackbar',
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
    }
    this.isEditingAlias = false;
  }

  onEdit(): void {
    this.isEditing = true;
  }

  onSave(): void {
    if (this.profileForm.valid) {
      const values = this.profileForm.getRawValue();
      localStorage.setItem('userAlias', values.alias);
      localStorage.setItem('userPhone', values.phone);
      localStorage.setItem('userEmail', values.email);
      localStorage.setItem('userGender', values.gender);
      this.aliasValue = values.alias; // 🔥 actualiza visualización al guardar

      this.snackBar.open('Cambios guardados correctamente.', 'Cerrar', {
        duration: 3000,
        panelClass: 'custom-snackbar',
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
      this.isEditing = false;
    } else {
      this.snackBar.open('Por favor completa correctamente todos los campos.', 'Cerrar', {
        duration: 3000,
        panelClass: 'custom-snackbar',
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
    }
  }

  saveProfileImage(): void {
    if (this.tempImage) {
      this.profileImageUrl = this.tempImage;
      localStorage.setItem('profileImage', this.tempImage);
      localStorage.setItem('customPhoto', 'true');
      this.customPhotoLoaded = true;
      this.tempImage = null;
      this.isEditingPhoto = false;

      this.snackBar.open('Imagen actualizada correctamente', 'Cerrar', {
        duration: 3000,
        panelClass: 'custom-snackbar',
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
    }
  }

  cancelPhotoEdit(): void {
    this.tempImage = null;
    this.isEditingPhoto = false;
    const storedImage = localStorage.getItem('profileImage');
    this.profileImageUrl = storedImage || 'assets/image/foto_perfil.jpg';
  }
}
