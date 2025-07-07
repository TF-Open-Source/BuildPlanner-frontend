import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-configurations-region',
  standalone: true,
  templateUrl: './configurations-region.component.html',
  styleUrls: ['./configurations-region.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    TranslateModule
  ]
})
export class ConfigurationsRegionComponent {
  selectedLanguage = 'es';
  selectedTimezone = 'UTC-5';

  languages = [
    { code: 'es', label: 'Español' },
    { code: 'en', label: 'English' }
  ];

  timezones = [
    'UTC-12', 'UTC-8', 'UTC-5', 'UTC+0', 'UTC+1', 'UTC+3', 'UTC+5', 'UTC+8'
  ];
}
