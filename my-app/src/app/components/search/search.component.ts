import { Component, Output } from '@angular/core';
import { ISearchItem } from 'src/app/models/search-response.model';
import { youTubeResponse } from '../../mock-response';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public allCards: ISearchItem[] = [];

  onSearch() {
    this.allCards = youTubeResponse.items;
  }

}
