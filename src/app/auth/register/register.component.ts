import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {MatError, MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {NgForOf, NgIf} from '@angular/common';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {TranslateModule, TranslatePipe, TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatCheckbox,
    MatOption,
    MatSelect,
    MatButtonModule,
    NgIf,
    MatError,
    NgForOf,
    TranslatePipe,
    TranslateModule,
    RouterLink,
  ],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  days: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
  months = [
    { value: 1, name: 'Enero' },
    { value: 2, name: 'Febrero' },
    { value: 3, name: 'Marzo' },
    { value: 4, name: 'Abril' },
    { value: 5, name: 'Mayo' },
    { value: 6, name: 'Junio' },
    { value: 7, name: 'Julio' },
    { value: 8, name: 'Agosto' },
    { value: 9, name: 'Septiembre' },
    { value: 10, name: 'Octubre' },
    { value: 11, name: 'Noviembre' },
    { value: 12, name: 'Diciembre' }
  ];
  years: number[] = Array.from({ length: new Date().getFullYear() - 1900 + 1 }, (_, i) => 1900 + i).reverse();

  constructor(private fb: FormBuilder,private translate: TranslateService) {
    this.translate.setDefaultLang('es');
    this.loadMonths();

    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      dni: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      age: ['', [Validators.required, Validators.min(1)]],
      gender: ['', Validators.required],
      terms: [false, Validators.requiredTrue],
      birthYear: ['', Validators.required],
      birthMonth: ['', Validators.required],
      birthDay: ['', Validators.required],
    });
  }

  loadMonths(){
    this.translate.get('MONTHS').subscribe((months: {[key:string]:string}) => {
      this.months = Object.keys(months).map(key => ({
        value: +key,
        name: months[key]
      }) )
    })
  }

  switchLang(lang: string){
    this.translate.use(lang)
    this.loadMonths()
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Formulario válido:', this.registerForm.value);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
