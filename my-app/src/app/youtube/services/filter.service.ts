import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  public sortOptions = {
    orderByDate: '',
    orderByCountView: '',
    keyWords:''
  };

  private sortOptions$$ = new BehaviorSubject(this.sortOptions);

  sortOptions$ = this.sortOptions$$.asObservable();

  sortByDate() {
    this.sortOptions.orderByDate = this.sortOptions.orderByDate === 'desc' ? 'asc' : 'desc';
    this.sortOptions.orderByCountView = '';
    this.sortOptions$$.next(this.sortOptions);
  }

  sortByCountView() {
    this.sortOptions.orderByCountView = this.sortOptions.orderByCountView === 'desc' ? 'asc' : 'desc';
    this.sortOptions.orderByDate = '';
    this.sortOptions$$.next(this.sortOptions);
  }

  sortByWords(e: Event) {
    this.sortOptions.keyWords = <string>(e.target as HTMLInputElement).value;
    this.sortOptions$$.next(this.sortOptions);
  }
}
