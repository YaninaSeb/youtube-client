import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private loginService: LoginService,
    private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userMail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, this.passwordValidator]]
    });
  }

  passwordValidator(control: FormControl): { [key: string]:boolean } | null {
    if (control.value.length < 8 || 
        !(/[a-z]/.test(control.value)) ||
        !(/[A-Z]/.test(control.value)) ||
        !(/\d[!@#?]/).test(control.value) ) {
      return { 'userPassword' : true };
    }
    return null;
  }

  get _mail() {
    return this.loginForm.controls['userMail'] as FormControl;
  }

  get _password() {
    return this.loginForm.controls['userPassword'] as FormControl;
  }

  onSubmit() {
    let userMail = this.loginForm.controls['userMail'].value;
    let userPassword = this.loginForm.controls['userPassword'].value;

    if (userMail === localStorage.getItem('userMail') && userPassword === localStorage.getItem('userPassword')) {
      this.loginService.login();
    }
  }
}
