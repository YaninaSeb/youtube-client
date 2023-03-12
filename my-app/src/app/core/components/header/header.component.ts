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

  isVisibilityUserInfo = false;

  isShowFilters = false;

  searchSubject = new Subject<string>();

  searchSubscription!: Subscription;

  constructor(
    private searchService: SearchService,
    public loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.searchSubscription = this.searchSubject
      .pipe(
        filter((str) => str.length >= 3),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((data) => {
        this.searchService.currSearchCriterion = data;
        this.searchService.getCards()
      });

    this.loginService.isUserLogged.subscribe((isLogged) => {
      this.isVisibilityUserInfo = isLogged ? true : false;
    });
  }

  onSearch(e: Event): void {
    let value = (<HTMLInputElement>e.target).value;
    this.searchSubject.next(value);
  }

  onFilters(): void {
    this.isShowFilters = !this.isShowFilters;
  }

  logout(): void {
    this.loginService.logout();
  }

  ngOnDestroy(): void {
    this.searchSubscription!.unsubscribe();
  }
}
