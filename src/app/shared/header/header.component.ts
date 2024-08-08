import { Component } from '@angular/core';
import { UserFilterService } from '../shared.service';
import { LoaderService } from '../../loader/loader.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
/**
 * Represents the HeaderComponent class.
 * This component is responsible for displaying the header of the application.
 */
export class HeaderComponent {
  constructor(private userFilterService: UserFilterService,public loaderService:LoaderService) {}

  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.userFilterService.setSearchTerm(target.value);
  }
}
