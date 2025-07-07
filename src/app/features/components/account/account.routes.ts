import { Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { AccountServicesComponent } from './account-services/account-services.component';
import { AccountContactComponent } from './account-contact/account-contact.component';
import { AccountPasswordComponent } from './account-password/account-password.component';
import { AccountPaymentsComponent } from './account-payments/account-payments.component';
import {AccountProfileComponent} from './account-profile/account-profile.component';

export const accountRoutes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: 'profile', component: AccountProfileComponent },
      { path: 'services', component: AccountServicesComponent },
      { path: 'contact', component: AccountContactComponent },
      { path: 'password', component: AccountPasswordComponent },
      { path: 'payments', component: AccountPaymentsComponent }
    ]
  }
];
