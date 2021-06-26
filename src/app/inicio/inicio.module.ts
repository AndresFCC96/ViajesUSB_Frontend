import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductosComponent } from './productos/productos.component';
// import { AuthModule } from '../administracion/administracion.module';

import { DestinoModule } from '../destino/destino.module';
import { LoginComponent } from '../administracion/components/login/login.component';


const routes: Routes = [

  {path: '', component: InicioComponent},
  {path: 'Login', component: LoginComponent}

];

@NgModule({
  declarations: [
    InicioComponent,
    ProductosComponent,
    ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    SharedModule,
    // AuthModule,
    DestinoModule

  ],
  exports: [RouterModule]
})
export class InicioModule { }
