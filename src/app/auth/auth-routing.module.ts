import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from '../auth/login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthModule } from '../administracion/administracion.module';


const routes: Routes = [
  {path: 'Login', component: LoginComponent},
  {path: 'Register', component: RegistroComponent},
  {path: 'Reset-password', component: ResetPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  SharedModule],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
