import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent
    ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent
    ],
})
export class SharedModule { }
