import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../models/search-response.model';

@Pipe({
  name: 'sortDate'
})
export class SortDatePipe implements PipeTransform {

  transform(value: ISearchItem[], order: string): ISearchItem[] {
    let result: ISearchItem[] = [];

    switch (order) {
      case 'asc' : { //по возрастанию
        result = value.sort( (a, b) => {
          let firstDate = new Date(a.snippet.publishedAt).getTime();
          let secondDate = new Date(b.snippet.publishedAt).getTime();
          
          return firstDate - secondDate;
        });

        break;
      }

      case 'desc' : { //по убыванию
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
