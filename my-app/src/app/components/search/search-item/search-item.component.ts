import { Component, Input } from '@angular/core';
import { ISearchItem } from 'src/app/models/search-response.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {
  @Input() allCards!: ISearchItem[];
  
  @Input() onecard!: ISearchItem;

}
