import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-configurations-info',
  standalone: true,
  templateUrl: './configurations-info.component.html',
  styleUrls: ['./configurations-info.component.css'],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class ConfigurationsInfoComponent {}
