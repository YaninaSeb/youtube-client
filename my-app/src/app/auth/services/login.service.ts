import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isUserLogged = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    if (localStorage.getItem('userMail')) {
      this.isUserLogged.next(true);
      this.router.navigate(['/search']);
    }
  }

  login() {
    this.isUserLogged.next(true);
    this.router.navigate(['/search']);
  }

  logout() {
    this.isUserLogged.next(false);
    this.router.navigate(['/login']);
  }
}
