import { Component, Input } from '@angular/core';
import { ISearchItem } from '../../models/search-response.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent  {
  @Input() onecard!: ISearchItem;
}
