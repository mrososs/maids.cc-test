import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.scss'],
})
export class UsersDashboardComponent implements OnInit {
  users$!: Observable<any[]>;
  totalUsers = 0;
  currentPage = 1;
  pageSize = 6;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.loadUsers(this.currentPage);
  }

  loadUsers(page: number) {
    this.users$ = this.userService.getUsers(page).pipe(
      map((response: any) => {
        this.totalUsers = response.total;
        return response.data; // return the array of users
      })
    );
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadUsers(this.currentPage);
  }
}
