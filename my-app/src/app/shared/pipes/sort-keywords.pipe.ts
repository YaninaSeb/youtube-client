import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../../youtube/models/search-response.model';

@Pipe({
  name: 'sortKeywords'
})
export class SortKeywordsPipe implements PipeTransform {

  transform(value: ISearchItem[], order: string): ISearchItem[] {
    let result: ISearchItem[] = value.filter((item: ISearchItem ) => {
      return (item.snippet.title.toLowerCase()).includes(order.toLowerCase());
    });
 
    return result;
  }

}
