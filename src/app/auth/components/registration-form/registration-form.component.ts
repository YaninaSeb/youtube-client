import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/login.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    mail: '',
    password: ''
  };

  registrationForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      userFirstName: ['', Validators.required],
      userLastName: ['', Validators.required],
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

  get _firstName() {
    return this.registrationForm.controls['userFirstName'] as FormControl;
  }

  get _lastName() {
    return this.registrationForm.controls['userLastName'] as FormControl;
  }

  get _mail() {
    return this.registrationForm.controls['userMail'] as FormControl;
  }

  get _password() {
    return this.registrationForm.controls['userPassword'] as FormControl;
  }

  onSubmit() {
    this.user.firstName = this.registrationForm.controls['userFirstName'].value;
    this.user.lastName = this.registrationForm.controls['userLastName'].value;
    this.user.mail = this.registrationForm.controls['userMail'].value;
    this.user.password = this.registrationForm.controls['userPassword'].value;

    this.loginService.setUser(this.user);

    this.router.navigate(['/login']);
  }
}
