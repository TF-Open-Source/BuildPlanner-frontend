// app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {HomeComponent} from './features/components/home/home.component';
import {AccountComponent} from './features/components/account/account.component';
import { accountRoutes } from './features/components/account/account.routes';
import { configurationsRoutes } from './features/components/configurations/configurations.routes';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  ...accountRoutes,
  ...configurationsRoutes,
  { path: '**', redirectTo: '' },
];
