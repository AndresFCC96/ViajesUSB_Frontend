import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './administracion/administracion.module';
import { InicioModule } from './inicio/inicio.module';
import { CustomerService } from './administracion/components/usuarios-panel/customer.service';
import { AuthComponent } from './auth/auth.component';


// const redirectToHome = () => redirectUnauthorizedTo(['/']);

const routes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
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
