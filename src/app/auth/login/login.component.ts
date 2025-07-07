import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormField, MatInput} from '@angular/material/input';
import {NgIf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {MatError} from '@angular/material/input';
import {MatLabel} from '@angular/material/input';
import {Router, RouterLink} from '@angular/router';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  imports: [MatButtonModule, ReactiveFormsModule, MatFormField, MatIcon, MatInput, NgIf, MatProgressSpinner, MatError, MatLabel, RouterLink, TranslatePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  hidePassword = true;
  isLoading = false;

  constructor(private fb: FormBuilder, private translate: TranslateService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      // Simular llamada a API
      setTimeout(() => {
        console.log('Login data:', this.loginForm.value);
        this.isLoading = false;
      }, 2000);
      this.router.navigate(['/home']);
    }
  }
  switchLang(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  currentLang(): string {
    return this.translate.currentLang;
  }
}
