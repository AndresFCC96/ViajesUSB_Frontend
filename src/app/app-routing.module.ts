// import { PagesRoutingModule } from './pages/pages.routing';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { InicioModule } from './inicio/inicio.module';
import { AuthModule } from './administracion/administracion.module';
// import { PagesDashboardRoutingModule } from './pages-dashboard/pages-dashboard.routing';
// import { PagenofoundComponent } from './pagenofound/pagenofound.component';


// const redirectToHome = () => redirectUnauthorizedTo(['/']);

const routes: Routes = [

  //{path: '**', component: PagenofoundComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    InicioModule,
    AuthModule

    // AuthRoutingModule,
    // PagesDashboardRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
