import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [HeaderComponent,SideMenuComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [HeaderComponent,SideMenuComponent]
})
export class SharedModule { }
