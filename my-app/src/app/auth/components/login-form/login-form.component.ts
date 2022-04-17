import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/login.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  constructor(private loginService: LoginService) {}

  onSubmit(form: NgForm) {
    const user: User = {
      name: form.value.name,
      password: form.value.password,
      token: Date.now()
    }
    this.loginService.setUser(user);
  }


}
