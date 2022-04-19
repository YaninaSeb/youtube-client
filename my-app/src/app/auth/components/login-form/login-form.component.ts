import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/login.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit{

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService) {}

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


  onSubmit() {
    const user: User = {
      name: this.loginForm.controls['userMail'].value,
      password: this.loginForm.controls['userPassword'].value,
      token: Date.now()
    };
    this.loginService.setUser(user);
  }

}
