import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { UsersDashboardComponent } from '../users-dashboard/users-dashboard.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { UsersService } from '../users.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { InterceptorService } from '../../loader/interceptor.service';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [UsersDashboardComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    AsyncPipe,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [
    UsersService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  exports: [UserDetailsComponent, UsersDashboardComponent, HttpClientModule],
})
export class UsersModule {}
