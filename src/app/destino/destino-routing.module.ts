import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DestinoCardsComponent } from './destino-cards/destino-cards.component';

const routes: Routes = [
  {path: 'Destinos', component: DestinoCardsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  SharedModule],
  exports: [RouterModule]
})
export class DestinoRoutingModule { }
