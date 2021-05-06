import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-usuarios-panel',
  templateUrl: './usuarios-panel.component.html',
  styleUrls: ['./usuarios-panel.component.css']
})
export class UsuariosPanelComponent implements OnInit {

  public customers: Customer[];

  constructor(private customerService: CustomerService ){}

  ngOnInit(){
    this.customerService.consultarCustomers().subscribe(
      (response: Customer[]) => { this.customers = response;},
      (error: HttpErrorResponse) => { alert(error.message); }
    );
  }

  // public getCustomers(): void {
  //
  // }

}
