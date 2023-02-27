import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ISearchItem } from '../models/search-response.model';
import { youTubeResponse } from '../../../assets/mock-response';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private videos$$ = new Subject<ISearchItem[]>();

  videos$ = this.videos$$.asObservable();

  mockResponse: ISearchItem[] = [];

  constructor(private httpService: HttpService) {}

  getCards(inputValue: string): void {
    this.httpService
      .getVideos(inputValue)
      .subscribe((data) => {
        console.log(data.items);
        this.mockResponse = Array.from(data.items);
        this.videos$$.next(this.mockResponse);
      })

    //this.mockResponse = Array.from(youTubeResponse.items);
    //this.videos$$.next(this.mockResponse);
  }

  getCardById(id: string): ISearchItem | undefined{ 
    return this.mockResponse.find((elem) => elem.id.videoId === id);
  }

}
