import { Routes } from '@angular/router';
import { UsersDashboardComponent } from './users/users-dashboard/users-dashboard.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  {
    path: 'users',

    loadChildren: () =>
      import('./users/users/users.module').then((m) => m.UsersModule),
    component: UsersDashboardComponent,
  },
  {
    path: 'user/:id',
    loadChildren: () =>
      import('./users/users/users.module').then((m) => m.UsersModule),
    component: UserDetailsComponent,
  },
];
