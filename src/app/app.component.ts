import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared/shared.module';
import { UsersModule } from './users/users/users.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule,UsersModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'test';
  // isSidebarOpen = false;

  // onToggleSidebar() {
  //   this.isSidebarOpen = !this.isSidebarOpen;
  // }
}
