import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUser!: User | null;

  constructor(private router: Router) {}

  setUser(user: User): void {
    this.currentUser = user;
    localStorage.setItem('USER', JSON.stringify(user));
    this.router.navigate(['/search']);
  }

  getUsername(): string | undefined {
    return this.currentUser?.name
  }

  removeUser() {
    localStorage.removeItem('USER');
    this.currentUser = null;
    this.router.navigate(['/login']);
  }

}
