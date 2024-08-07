import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared/shared.module';
import { UsersModule } from './users/users/users.module';
import { UsersDashboardComponent } from './users/users-dashboard/users-dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, UsersModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {}
}
