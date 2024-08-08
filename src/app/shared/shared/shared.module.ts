import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBar } from '@angular/material/progress-bar';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '../../loader/interceptor.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, SideMenuComponent],
  imports: [CommonModule, MatButtonModule, MatProgressBar,RouterModule],
  exports: [HeaderComponent, SideMenuComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
})
export class SharedModule {}
