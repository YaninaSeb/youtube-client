import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ISearch, ISearchItem } from '../models/search-response.model';
import { HttpService } from './http.service';
import { IVideo, IVideoItem } from '../models/search-response-item.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  videos$$ = new BehaviorSubject<IVideoItem[]>([]);

  videos$ = this.videos$$.asObservable();

  response: IVideoItem[] = [];

  currVideosPage = 1;

  currSearchCriterion = '';

  constructor(private httpService: HttpService) {}

  getCards(): void {
    this.httpService
      .getVideos(this.currVideosPage, this.currSearchCriterion)
      .subscribe((data: ISearch) => {
        let allId = '';
        data.items.forEach((elem: ISearchItem) => allId += `,${elem.id.videoId}`);

        this.httpService
          .getVideoById(allId.slice(1))
          .subscribe((data: IVideo) => {
            this.response = data.items;
            this.videos$$.next(this.response);
          });
      });
  }

  getCardById(id: string): IVideoItem {
    return <IVideoItem>this.response.find((video: IVideoItem) => video.id === id)
  }
}
