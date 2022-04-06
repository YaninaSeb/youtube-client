import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {

  @Output() sortVideosByDate = new EventEmitter<string>();

  @Output() sortVideosByCountView = new EventEmitter<string>();
  
  @Output() sortVideosByKeyWords = new EventEmitter<string>();

  public isFiltersActive = false;
  
  showBlockFilters() {
    this.isFiltersActive = !this.isFiltersActive;
  }

  public sortOptions = {
    orderByDate: '',
    orderByCountView: '',
    keyWords:''
  };

  sortByDate() {
    this.sortOptions.orderByDate = this.sortOptions.orderByDate === 'desc' ? 'asc' : 'desc';
    this.sortOptions.orderByCountView = '';
    this.sortVideosByDate.emit(this.sortOptions.orderByDate);
  }

  sortByCountView() {
    this.sortOptions.orderByCountView = this.sortOptions.orderByCountView === 'desc' ? 'asc' : 'desc';
    this.sortOptions.orderByDate = '';
    this.sortVideosByCountView.emit(this.sortOptions.orderByCountView);
  }

  sortByWords(e: Event) {
    this.sortOptions.keyWords = <string>(e.target as HTMLInputElement).value;
    this.sortVideosByKeyWords.emit(this.sortOptions.keyWords);
  }

}
