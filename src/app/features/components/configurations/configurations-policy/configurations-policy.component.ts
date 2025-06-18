import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-configurations-policy',
  standalone: true,
  templateUrl: './configurations-policy.component.html',
  styleUrls: ['./configurations-policy.component.css'],
  imports: [
    CommonModule,
    MatCardModule,
    TranslateModule,
  ]
})
export class ConfigurationsPolicyComponent {}
