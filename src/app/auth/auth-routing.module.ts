import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes),
  SharedModule],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
