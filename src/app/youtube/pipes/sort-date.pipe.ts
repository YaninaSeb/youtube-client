import { Pipe, PipeTransform } from '@angular/core';
import { IVideoItem } from '../models/search-response-item.model';

@Pipe({
  name: 'sortDate'
})
export class SortDatePipe implements PipeTransform {

  transform(value: IVideoItem[], order: string): IVideoItem[] {
    let result: IVideoItem[] = [];

    switch (order) {
      case 'asc' : {
        result = value.sort( (a, b) => {
          let firstDate = new Date(a.snippet.publishedAt).getTime();
          let secondDate = new Date(b.snippet.publishedAt).getTime();
          
          return firstDate - secondDate;
        });

        break;
      }

      case 'desc' : {
        result = value.sort( (a, b) => {
          let firstDate = new Date(a.snippet.publishedAt).getTime();
          let secondDate = new Date(b.snippet.publishedAt).getTime();
          
          return secondDate - firstDate;
        });

        break;
      }

      default: {
        result = value;
      }
    }

    return result;
  }
}
