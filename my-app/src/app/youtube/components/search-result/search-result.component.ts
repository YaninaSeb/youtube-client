import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ISearchItem } from '../../models/search-response.model';
import { FilterService } from '../../services/filter.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit, OnDestroy {

  allCards: ISearchItem[] = [];

  allCardsSubscription!: Subscription;

  constructor(public searchService: SearchService, public filterService: FilterService) { }

  ngOnInit(): void {
    this.allCardsSubscription = this.searchService.videos$.subscribe((data) => {
      this.allCards = data;
    });
  }

  ngOnDestroy(): void {
    this.allCardsSubscription.unsubscribe();
  }


}
