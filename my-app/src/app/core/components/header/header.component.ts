import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, Subject, Subscription } from 'rxjs';
import { LoginService } from 'src/app/auth/services/login.service';
import { FilterService } from 'src/app/youtube/services/filter.service';
import { SearchService } from 'src/app/youtube/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  userName = '';

  isVisibilityUserInfo = false;

  searchSubject = new Subject<string>();

  searchSubscription!: Subscription;

  constructor(
    private searchService: SearchService,
    private filterService: FilterService,
    public loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.searchSubscription = this.searchSubject
      .pipe(
        filter((str) => str.length >= 3),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((data) => this.searchService.getCards(data));

    this.loginService.isUserLogged.subscribe((isLogged) => {
      if (isLogged) {
        this.userName = localStorage.getItem('userName')!;
        this.isVisibilityUserInfo = true;
      } else {
        this.userName = '';
        this.isVisibilityUserInfo = false;
      }
    });
  }

  onSearch(e: Event): void {
    let value = (<HTMLInputElement>e.target).value;
    this.searchSubject.next(value);
  }

  onFilters(): void {
    this.filterService.showFilters();
  }

  logout(): void {
    this.loginService.logout();
  }

  ngOnDestroy(): void {
    this.searchSubscription!.unsubscribe();
  }

}
