import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { RegistrationComponent } from './pages/registration/registration.component';

@NgModule({
  declarations: [
    LoginFormComponent,
    LoginComponent,
    RegistrationFormComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule { }
