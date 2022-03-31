import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  public isFiltersActive = false;

  showBlockFilters() {
    this.isFiltersActive = !this.isFiltersActive;
  }

}
