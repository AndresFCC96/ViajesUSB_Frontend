import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';


@NgModule({
  declarations: [LoginComponent, RegistroComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [
    LoginComponent, 
    RegistroComponent, 
    ResetPasswordComponent
  ]
})
export class AuthModule { }
