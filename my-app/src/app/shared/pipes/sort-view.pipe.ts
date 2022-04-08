import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../../youtube/models/search-response.model';

@Pipe({
  name: 'sortView'
})
export class SortViewPipe implements PipeTransform {

  transform(value: ISearchItem[], order: string): ISearchItem[] {
    let result: ISearchItem[] = [];
 
    switch (order) {
      case 'asc' : { //по возрастанию
        result = value.sort( (a, b) => {
          let firstDate = Number(a.statistics.viewCount);
          let secondDate = Number(b.statistics.viewCount);
           
          return firstDate - secondDate;
        });
 
        break;
      }
 
      case 'desc' : { //по убыванию
        result = value.sort( (a, b) => {
          let firstDate = Number(a.statistics.viewCount);
          let secondDate = Number(b.statistics.viewCount);
          
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
