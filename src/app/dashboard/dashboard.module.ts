import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DestinoListComponent } from './destino-list/destino-list.component';
import { TipoDestinoListComponent } from './tipo-destino-list/tipo-destino-list.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { TipoIdentificacionListComponent } from './tipo-identificacion-list/tipo-identificacion-list.component';
import { RouterLink, RouterModule } from '@angular/router';
// import { MaterialModule } from '../material/material.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { SaveclienteComponent } from './savecliente/savecliente.component';
import { SavedestinoComponent } from './savedestino/savedestino.component';
import { SaveTipoIdentificacionComponent } from './save-tipo-identificacion/save-tipo-identificacion.component';
import { SaveTipoDestinoComponent } from './save-tipo-destino/save-tipo-destino.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { EditDestinoComponent } from './edit-destino/edit-destino.component';
import { EditClienteComponent } from './edit-cliente/edit-cliente.component';
import { EditTipoIdentificacionComponent } from './edit-tipo-identificacion/edit-tipo-identificacion.component';
import { EditTipoDestinoComponent } from './edit-tipo-destino/edit-tipo-destino.component';

@NgModule({
  declarations: [DashboardComponent, DestinoListComponent, TipoDestinoListComponent, ClienteListComponent, TipoIdentificacionListComponent, SaveclienteComponent, SavedestinoComponent, SaveTipoIdentificacionComponent, SaveTipoDestinoComponent, EditDestinoComponent, EditClienteComponent, EditTipoIdentificacionComponent, EditTipoDestinoComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class DashboardModule { }
