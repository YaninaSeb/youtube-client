import { Component } from '@angular/core';
import { FilterService } from 'src/app/youtube/services/filter.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {

  constructor(public filterService: FilterService) {}

  sortByDate(): void {
    this.filterService.sortByDate();
  }

  sortByCountView(): void {
    this.filterService.sortByCountView();
  }

  sortByWords(e: Event): void {
    this.filterService.sortByWords(e);
  }
}
