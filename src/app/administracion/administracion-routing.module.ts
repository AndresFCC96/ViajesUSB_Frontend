import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from '../auth/login/login.component';
import { MainAdministradorComponent } from './components/main-administrador/main-administrador.component';
import { UsuariosPanelComponent } from './components/usuarios-panel/usuarios-panel.component';
import { AuthModule } from './administracion.module';
import { SaveformComponent } from './components/saveform/saveform.component';
import { EditformComponent } from './components/editform/editform.component';

const routes: Routes = [
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
export class AuthRoutingModule { }
