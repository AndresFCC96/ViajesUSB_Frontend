import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AuthRoutingModule } from './administracion-routing.module';
import { LoginComponent } from '../auth/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { MainAdministradorComponent } from './components/main-administrador/main-administrador.component';
import { RouterLink, RouterModule } from '@angular/router';
import { UsuariosPanelComponent } from './components/usuarios-panel/usuarios-panel.component';
import { SaveformComponent } from './components/saveform/saveform.component';
import { FormsModule } from '@angular/forms';
import { EditformComponent } from './components/editform/editform.component';


@NgModule({
  declarations: [LoginComponent, 
    MainAdministradorComponent,
    UsuariosPanelComponent,
    SaveformComponent,
    EditformComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    MainAdministradorComponent,
    UsuariosPanelComponent,
    EditformComponent,
    SaveformComponent
    // RouterLink
  ]
})
export class AuthModule { }
