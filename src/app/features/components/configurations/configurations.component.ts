import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-configurations',
  standalone: true,
  imports: [
    RouterModule,
    MatButtonModule,
    MatIconModule,
  TranslateModule
  ],
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.css']
})
export class ConfigurationsComponent {}
