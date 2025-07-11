import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-configurations-privacy',
  standalone: true,
  templateUrl: './configurations-privacy.component.html',
  styleUrls: ['./configurations-privacy.component.css'],
  imports: [
    CommonModule,
    MatCardModule,
    TranslateModule,
  ]
})
export class ConfigurationsPrivacyComponent {}
