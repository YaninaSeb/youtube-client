import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit, OnDestroy {

  isShowFilter!: boolean;

  isShowFilterSubscription!: Subscription;

  constructor(public filterService: FilterService) {}

  ngOnInit(): void {
    this.isShowFilterSubscription = this.filterService.showFilters$.subscribe((isShow) => {
      this.isShowFilter = isShow;
    });
  }

  sortByDate(): void {
    this.filterService.sortByDate();
  }

  sortByCountView(): void {
    this.filterService.sortByCountView();
  }

  sortByWords(e: Event): void {
    this.filterService.sortByWords(e);
  }

  ngOnDestroy(): void {
    this.isShowFilterSubscription.unsubscribe();
  }
}
