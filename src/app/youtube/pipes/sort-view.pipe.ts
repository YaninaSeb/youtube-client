import { Pipe, PipeTransform } from '@angular/core';
import { IVideoItem } from '../models/search-response-item.model';

@Pipe({
  name: 'sortView'
})
export class SortViewPipe implements PipeTransform {

  transform(value: IVideoItem[], order: string): IVideoItem[] {
    let result: IVideoItem[] = [];
 
    switch (order) {
      case 'asc' : {
        result = value.sort( (a, b) => {
          let firstDate = Number(a.statistics.viewCount);
          let secondDate = Number(b.statistics.viewCount);
           
          return firstDate - secondDate;
        });
 
        break;
      }
 
      case 'desc' : {
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
