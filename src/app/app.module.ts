import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerService } from './component/usuarios-panel/customer.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './administracion/auth.module';
import { InicioModule } from './inicio/inicio.module';


// const redirectToHome = () => redirectUnauthorizedTo(['/']);

const routes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    AuthModule,
    InicioModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
