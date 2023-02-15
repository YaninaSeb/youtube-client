import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ShortRequestInterceptor implements HttpInterceptor {

  private BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
  private API_KEY = 'AIzaSyBvbrusb2C8EgiADs-Q7eYMR3P6c1Ol5wg';

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = request.clone({
      url: `${this.BASE_URL}?key=${this.API_KEY}`,
    });

    return next.handle(authReq);
  }
}
