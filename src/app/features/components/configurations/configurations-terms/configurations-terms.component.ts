import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-configurations-terms',
  standalone: true,
  templateUrl: './configurations-terms.component.html',
  styleUrls: ['./configurations-terms.component.css'],
  imports: [
    CommonModule,
    MatCardModule,
    TranslateModule
  ]
})
export class ConfigurationsTermsComponent {}
