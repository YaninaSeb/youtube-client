import { Component } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';
import { FilterService } from 'src/app/youtube/services/filter.service';
import { SearchService } from 'src/app/youtube/services/search.service';
import { youTubeResponse } from '../../../../assets/mock-response';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private searchService: SearchService, private filterService: FilterService, public loginService: LoginService) { }

  onSearch(): void {
    this.searchService.mockResponse = Array.from(youTubeResponse.items); 
    this.searchService.getAllCards();
  }

  onFilters() {
    this.filterService.showFilters();
  }

  userName(): string {
    return this.loginService.getUsername() || " "
  }

  logout(): void {
    this.loginService.removeUser();
  }

}
