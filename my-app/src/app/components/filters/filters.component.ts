import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {

  @Output() sortVideosByDate = new EventEmitter<string>();
  @Output() sortVideosByCountView = new EventEmitter<string>();

  public isFiltersActive = false;
  
  showBlockFilters() {
    this.isFiltersActive = !this.isFiltersActive;
  }

  private sortOptions = {
    orderByDate: '',
    orderByCountView: ''
  }

  sortByDate() {
    this.sortOptions.orderByDate = this.sortOptions.orderByDate === 'desc' ? 'asc' : 'desc';
    this.sortVideosByDate.emit(this.sortOptions.orderByDate);
  }

  sortByCountView() {
    this.sortOptions.orderByCountView = this.sortOptions.orderByCountView === 'desc' ? 'asc' : 'desc';
    this.sortVideosByCountView.emit(this.sortOptions.orderByCountView);

  }

}
