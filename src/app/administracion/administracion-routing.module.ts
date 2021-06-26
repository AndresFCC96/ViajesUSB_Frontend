import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MainAdministradorComponent } from './components/main-administrador/main-administrador.component';
import { UsuariosPanelComponent } from './components/usuarios-panel/usuarios-panel.component';
import { AuthModule } from './administracion.module';
import { SaveformComponent } from './components/saveform/saveform.component';
import { EditformComponent } from './components/editform/editform.component';

import { RegistroComponent } from './components/registro/registro.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DestinoListComponent } from '../dashboard/destino-list/destino-list.component';
import { TipoDestinoListComponent } from '../dashboard/tipo-destino-list/tipo-destino-list.component';
import { ClienteListComponent } from '../dashboard/cliente-list/cliente-list.component';
import { TipoIdentificacionListComponent } from '../dashboard/tipo-identificacion-list/tipo-identificacion-list.component';

const routes: Routes = [
  {path: 'Dashboard', component: DashboardComponent},
  {path: 'Dashboard/DestinoList', component: DestinoListComponent},
  {path: 'Dashboard/TipoDestinoList', component: TipoDestinoListComponent},
  {path: 'Dashboard/ClienteList', component: ClienteListComponent},
  {path: 'Dashboard/TipoIdentificacionList', component: TipoIdentificacionListComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Register', component: RegistroComponent},
  {path: 'Reset-password', component: ResetPasswordComponent},
  {path: 'PanelAdmin', component: MainAdministradorComponent},
  {path: 'listaUsuarios', component: UsuariosPanelComponent},
  {path: 'crearUsuarios', component: SaveformComponent},
  {path: 'editUsuarios/:id', component: EditformComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  SharedModule],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
