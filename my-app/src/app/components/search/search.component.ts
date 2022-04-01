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

  public allCards: ISearchItem[] = [];

  onSearch() {
    this.allCards = youTubeResponse.items;
  }

  sortVideosByDate(value: any) {
    this.orderByDate = value;
  }
  sortVideoByCountView(value: any) {
    this.orderByCountView = value;
  }

}
