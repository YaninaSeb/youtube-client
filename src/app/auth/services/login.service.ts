import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user!: User;

  isUserLogged = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    if (localStorage.getItem('userToken')) {
      this.isUserLogged.next(true);
      this.router.navigate(['/search']);
    }
  }

  setUser(currUser: User) {
    this.user = currUser;
    localStorage.setItem('userName', `${this.user.firstName} ${this.user.lastName}`);
    localStorage.setItem('userMail', this.user.mail);
    localStorage.setItem('userPassword', this.user.password);
  }

  login() {
    localStorage.setItem('userToken', Date.now().toString());
    this.isUserLogged.next(true);
    this.router.navigate(['/search']);
  }

  logout() {
    localStorage.removeItem('userToken');
    this.isUserLogged.next(false);
    this.router.navigate(['/login']);
  }
}
