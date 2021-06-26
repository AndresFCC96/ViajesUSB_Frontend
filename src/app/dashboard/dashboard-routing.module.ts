import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { DashboardComponent } from './dashboard.component';
import { DestinoListComponent } from './destino-list/destino-list.component';
import { EditClienteComponent } from './edit-cliente/edit-cliente.component';
import { EditDestinoComponent } from './edit-destino/edit-destino.component';
import { EditTipoDestinoComponent } from './edit-tipo-destino/edit-tipo-destino.component';
import { EditTipoIdentificacionComponent } from './edit-tipo-identificacion/edit-tipo-identificacion.component';
import { SaveTipoDestinoComponent } from './save-tipo-destino/save-tipo-destino.component';
import { SaveTipoIdentificacionComponent } from './save-tipo-identificacion/save-tipo-identificacion.component';
import { SaveclienteComponent } from './savecliente/savecliente.component';
import { SavedestinoComponent } from './savedestino/savedestino.component';
import { TipoDestinoListComponent } from './tipo-destino-list/tipo-destino-list.component';
import { TipoIdentificacionListComponent } from './tipo-identificacion-list/tipo-identificacion-list.component';

const routes: Routes = [
  {path: 'Dashboard', component: DashboardComponent},
  {path: 'Dashboard/DestinoList', component: DestinoListComponent},
  {path: 'Dashboard/TipoDestinoList', component: TipoDestinoListComponent},
  {path: 'Dashboard/ClienteListComponent', component: ClienteListComponent},
  {path: 'Dashboard/TipoIdentificacionList', component: TipoIdentificacionListComponent},
  {path: 'Dashboard/SaveDestino', component: SavedestinoComponent},
  {path: 'Dashboard/SaveTipoDestino', component: SaveTipoDestinoComponent},
  {path: 'Dashboard/SaveCliente', component: SaveclienteComponent},
  {path: 'Dashboard/SaveTipoIdentificacion', component: SaveTipoIdentificacionComponent},
  {path: 'Dashboard/EditDestino/:id', component: EditDestinoComponent},
  {path: 'Dashboard/EditTipoDestino/:id', component: EditTipoDestinoComponent},
  {path: 'Dashboard/EditCliente/:id', component: EditClienteComponent},
  {path: 'Dashboard/EditTipoIdentificacion/:id', component: EditTipoIdentificacionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
