import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinoRoutingModule } from './destino-routing.module';
import { DestinoComponent } from './destino.component';
import { DestinoCardsComponent } from './destino-cards/destino-cards.component';
import { FormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card'
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [DestinoComponent, DestinoCardsComponent],
  imports: [
    CommonModule,
    DestinoRoutingModule,
    FormsModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class DestinoModule { }
