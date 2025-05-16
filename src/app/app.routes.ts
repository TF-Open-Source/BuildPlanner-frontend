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


export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  {path: 'tasks', component: TasksComponent},
  {path: 'task-details/:id', component: TaskDetailsComponent},
  ...accountRoutes,
  ...configurationsRoutes,
  { path: '**', redirectTo: '' },
  {path: 'account', component: AccountComponent},
];
