import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { CoverComponent } from './component/cover/cover.component';
import { ProductosComponent } from './component/productos/productos.component';
import { MarcasComponent } from './component/marcas/marcas.component';
import { MainAdministradorComponent } from './component/main-administrador/main-administrador.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NavbarAdminComponent } from './component/navbar-admin/navbar-admin.component';
import { UsuariosPanelComponent } from './component/usuarios-panel/usuarios-panel.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginUsuarioComponent } from './component/login-usuario/login-usuario.component';

const routes: Routes = [
  {path: 'Inicio', component: InicioComponent},
  {path: 'IngresoUsuarios', pathMatch:'full', component: LoginUsuarioComponent},
  {path: 'DistriunidosConfig', pathMatch:'full', component: MainAdministradorComponent},
  {path: 'UsuariosPanel', pathMatch:'full', component: UsuariosPanelComponent},
  {path: '**', pathMatch:'full', redirectTo: 'Inicio'}
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CoverComponent,
    ProductosComponent,
    MarcasComponent,
    MainAdministradorComponent,
    NavbarComponent,
    NavbarAdminComponent,
    UsuariosPanelComponent,
    InicioComponent,
    LoginUsuarioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
