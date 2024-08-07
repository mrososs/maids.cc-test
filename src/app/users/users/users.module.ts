import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { UsersDashboardComponent } from '../users-dashboard/users-dashboard.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { UsersService } from '../users.service';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersDashboardComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    AsyncPipe
  ],
  providers: [UsersService],
  exports: [UserDetailsComponent, UsersDashboardComponent, HttpClientModule],
})
export class UsersModule {}
