import { Pipe, PipeTransform } from '@angular/core';
import { IVideoItem } from '../models/search-response-item.model';

@Pipe({
  name: 'sortKeywords'
})
export class SortKeywordsPipe implements PipeTransform {

  transform(value: IVideoItem[], order: string): IVideoItem[] {
    let result: IVideoItem[] = value.filter((item: IVideoItem ) => {
      return (item.snippet.title.toLowerCase()).includes(order.toLowerCase());
    });
 
    return result;
  }
}
