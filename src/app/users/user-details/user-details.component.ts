/**
 * Represents the UserDetailsComponent class.
 * This component is responsible for displaying the details of a user.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-details',

  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent implements OnInit {
  user: any = {};
  constructor(
    private router: ActivatedRoute,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    const userId = this.router.snapshot.paramMap.get('id');
    if (userId) {
      this.userService.getUserDetails(Number(userId)).subscribe((response) => {
        this.user = response.data;
      });
    }
  }
}
