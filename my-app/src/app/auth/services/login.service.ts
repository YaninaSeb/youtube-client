import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUser = this.getUser();

  constructor(private router: Router) {}

  setUser(newUser: User): void {
    this.currentUser = newUser;
    localStorage.setItem('USER', JSON.stringify(this.currentUser));
    this.router.navigate(['/search']);
  }

  getUser() {
    const user = localStorage.getItem('USER');
    if (user) {
      return JSON.parse(user) as User;
    }
    return null;
  }

  getUsername(): string | undefined {
    return this.currentUser?.name;
  }

  removeUser() {
    localStorage.removeItem('USER');
    this.currentUser = null;
    this.router.navigate(['/login']);
  }

}
