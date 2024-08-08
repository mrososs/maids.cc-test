import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UsersService } from '../users.service';
import { UserFilterService } from '../../shared/shared.service';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.scss'],
})
export class UsersDashboardComponent implements OnInit {
  users$!: Observable<any[]>;
  filteredUsers$!: Observable<any[]>;
  searchTerm = '';
  totalUsers = 0;
  currentPage = 1;
  pageSize = 6;

  constructor(
    private userService: UsersService,
    private userFilterService: UserFilterService
  ) {}

  ngOnInit(): void {
    this.userFilterService.searchTerm$.subscribe((term) => {
      this.searchTerm = term;
      this.loadUsers(this.currentPage);
    });
    this.loadUsers(this.currentPage);
  }

  loadUsers(page: number) {
    this.users$ = this.userService.getUsers(page).pipe(
      map((response: any) => {
        this.totalUsers = response.total;
        return response.data;
      })
    );

    this.filteredUsers$ = this.users$.pipe(
      map((users) =>
        users.filter((user) =>
          `${user.first_name} ${user.last_name}`
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase())
        )
      )
    );
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadUsers(this.currentPage);
  }
}
