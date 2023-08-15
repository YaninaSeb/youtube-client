import { Component, Input } from '@angular/core';
import { IVideoItem } from '../../models/search-response-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent  {
  @Input() onecard!: IVideoItem;
}
