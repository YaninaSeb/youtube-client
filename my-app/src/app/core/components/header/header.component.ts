import { Component } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';
import { FilterService } from 'src/app/youtube/services/filter.service';
import { SearchService } from 'src/app/youtube/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private searchService: SearchService, 
    private filterService: FilterService, 
    public loginService: LoginService
  ) { }

  onSearch(): void {
    this.searchService.getCards();
  }

  onFilters(): void {
    this.filterService.showFilters();
  }

  userName(): string {
    return this.loginService.getUsername() || '';
  }

  logout(): void {
    this.loginService.removeUser();
  }

}
