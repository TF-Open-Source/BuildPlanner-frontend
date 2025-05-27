// app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {HomeComponent} from './features/components/home/home.component';
import {AccountComponent} from './features/components/account/account.component';
import { accountRoutes } from './features/components/account/account.routes';

import { configurationsRoutes } from './features/components/configurations/configurations.routes';

import {TasksComponent} from './shared/components/tasks/tasks.component';
import {TaskDetailsComponent} from './shared/components/task-details/task-details.component';
import {AuthLayoutComponent} from './auth/auth-layout/auth-layout.component';
import {AppComponent} from './app.component';


export const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  },

  {path: '', component: HomeComponent},
  {path: 'account', component: AccountComponent, children: accountRoutes},
  {path: 'configurations', component: AccountComponent, children: configurationsRoutes},
  {path: 'projects', component: TasksComponent},
  {path: 'tasks-details/:id', component: TaskDetailsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  ...configurationsRoutes,
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];
