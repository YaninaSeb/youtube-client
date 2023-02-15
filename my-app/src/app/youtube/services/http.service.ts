import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, EMPTY, Observable } from 'rxjs';
//AIzaSyBvbrusb2C8EgiADs-Q7eYMR3P6c1Ol5wg
//https://www.googleapis.com/youtube/v3/search?key=AIzaSyBvbrusb2C8EgiADs-Q7eYMR3P6c1Ol5wg&type=video&part=snippet&maxResults=15&q=js
//https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBvbrusb2C8EgiADs-Q7eYMR3P6c1Ol5wg&id=nq4aU9gmZQk,REu2BcnlD34,qbPTdW7KgOg&part=snippet,statistics

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private URL = 'https://www.googleapis.com/youtube/v3/search';
  private KEY_API = 'AIzaSyBvbrusb2C8EgiADs-Q7eYMR3P6c1Ol5wg';


  constructor(private http: HttpClient) { }

  getVideos(value: string): Observable<any> {
    return this.http
      .get<any>(this.URL, { 
        //headers: {'TOKEN': `API TOKEN` } // эту частьсделать через интерсепторс
        params: new HttpParams()
          .set('key', this.KEY_API)
          .set('type', 'video')
          .set('part', 'snippet')
          .set('maxResults', 20)
          .set('q', value)
      })
      .pipe(
        catchError((error) => EMPTY)
      )
  }


}
