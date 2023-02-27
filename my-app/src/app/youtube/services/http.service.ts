import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, EMPTY, Observable } from 'rxjs';
import { ISearch } from '../models/search-response.model';
import { IVideo } from '../models/search-response-item.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getVideos(searchCriterial: string): Observable<ISearch> {
    const params = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', 20)
      .set('q', searchCriterial)

    return this.http.get<ISearch>('search', { params })
      .pipe(
        catchError((error) => {
          console.log('ERROR', error);
          return EMPTY;
        })
      );
  }

  getVideoById(videoId: string): Observable<IVideo> {
    const params = new HttpParams()
      .set('id', videoId)
      .set('part', 'snippet,statistics')

    return this.http.get<IVideo>('videos', { params })
      .pipe(
        catchError((error) => {
          console.log('ERROR', error);
          return EMPTY;
        })
      );
  }

}
