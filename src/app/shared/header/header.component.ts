import { Component } from '@angular/core';
import { UserFilterService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private userFilterService: UserFilterService) {}

  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.userFilterService.setSearchTerm(target.value);
  }
}
