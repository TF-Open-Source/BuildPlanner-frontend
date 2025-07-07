import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-account-payments',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    TranslateModule],
  templateUrl: './account-payments.component.html',
  styleUrls: ['./account-payments.component.css']
})
export class AccountPaymentsComponent {
  payments = [
    { id: 'P001', date: '2024-04-15', amount: 'S/ 250.00', status: 'Pagado' },
    { id: 'P002', date: '2024-05-02', amount: 'S/ 150.00', status: 'Pendiente' },
    { id: 'P003', date: '2024-05-10', amount: 'S/ 180.00', status: 'Pagado' }
  ];
}
