import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductosComponent } from './productos/productos.component';
import { MarcasComponent } from './marcas/marcas.component';


const routes: Routes = [

  {path: '', component: InicioComponent}

];

@NgModule({
  declarations: [
    InicioComponent,
    ProductosComponent,
    MarcasComponent],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    SharedModule,
    
  ],
  exports: [RouterModule]
})
export class InicioModule { }
