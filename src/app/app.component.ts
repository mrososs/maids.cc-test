import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared/shared.module';
import { UsersModule } from './users/users/users.module';
import { UsersDashboardComponent } from './users/users-dashboard/users-dashboard.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './loader/interceptor.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, UsersModule],
  providers:[
    {provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {}
}
