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

  private BASE_URL = 'https://www.googleapis.com/youtube/v3';
  private API_KEY = 'AIzaSyBvbrusb2C8EgiADs-Q7eYMR3P6c1Ol5wg';

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authReq = request.clone({
      url: `${this.BASE_URL}/${request.url}?key=${this.API_KEY}`,
    });

    return next.handle(authReq);
  }
}
