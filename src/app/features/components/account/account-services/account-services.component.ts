import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-account-services',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    TranslateModule
  ],
  templateUrl: './account-services.component.html',
  styleUrls: ['./account-services.component.css']
})
export class AccountServicesComponent {
  services = [
    { title: 'ACCOUNT.SERVICES.WORK_INSPECTION', date: '2024-11-20', status: 'Completado' },
    { title: 'ACCOUNT.SERVICES.TASK_SUPERVISION', date: '2024-12-01', status: 'Completado' },
    { title: 'ACCOUNT.SERVICES.MACHINERY_COORD', date: '2025-01-10', status: 'Pendiente' }
  ];
}
