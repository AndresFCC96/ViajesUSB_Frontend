import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './administracion-routing.module';
import { LoginComponent } from '../auth/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { MainAdministradorComponent } from './components/main-administrador/main-administrador.component';
import { RouterLink, RouterModule } from '@angular/router';
import { UsuariosPanelComponent } from './components/usuarios-panel/usuarios-panel.component';
import { EditarformComponent } from './components/editarform/editarform.component';


@NgModule({
  declarations: [LoginComponent, 
    MainAdministradorComponent,
    UsuariosPanelComponent,
    EditarformComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    MainAdministradorComponent,
    UsuariosPanelComponent
    // RouterLink
  ]
})
export class AuthModule { }
