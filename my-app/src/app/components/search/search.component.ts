import { Component, Output } from '@angular/core';
import { ISearchItem } from 'src/app/models/search-response.model';
import { youTubeResponse } from '../../mock-response';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public orderByDate = '';

  public orderByCountView = '';

  public keyWord = '';


  public allCards: ISearchItem[] = [];

  onSearch() {
    this.allCards = youTubeResponse.items;
  }

  sortVideosByDate(value: string) {
    this.orderByDate = value;
  }
  
  sortVideoByCountView(value: string) {
    this.orderByCountView = value;
  }

  sortVideosByKeyWords(value: string) {
    this.keyWord = value;
  }

}
