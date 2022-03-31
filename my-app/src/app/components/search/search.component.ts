import { Component, Output } from '@angular/core';
import { ISearchItem } from 'src/app/models/search-response.model';
import { youTubeResponse } from '../../mock-response';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  //allCards: ISearchItem[] = [];
  allCards: ISearchItem[] = youTubeResponse.items; //временно

  onSearch() {
    this.allCards = youTubeResponse.items;
  }


}
