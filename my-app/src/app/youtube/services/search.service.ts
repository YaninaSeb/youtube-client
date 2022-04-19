import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ISearchItem } from '../models/search-response.model';
import { youTubeResponse } from '../../../assets/mock-response';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private videos$$ = new Subject<ISearchItem[]>();

  videos$ = this.videos$$.asObservable();

  mockResponse: ISearchItem[] = [];

  getAllCards(): void {
    this.mockResponse = Array.from(youTubeResponse.items);
    this.videos$$.next(this.mockResponse);
  }

  getCardById(id: string): ISearchItem | undefined{ 
    return this.mockResponse.find((elem) => elem.id === id);
  }

}
