import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../usuarios-panel/customer';
import { CustomerService } from '../usuarios-panel/customer.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-saveform',
  templateUrl: './saveform.component.html',
  styleUrls: ['./saveform.component.css']
})
export class SaveformComponent implements OnInit {

  public email: string

  public customer: Customer = new Customer()

  constructor(public customerService: CustomerService,
    public router: Router) { }

  ngOnInit(): void {
  }

  public create(): void {
    this.customerService.crearCustomers(this.customer)
    .subscribe(customer => {
      this.router.navigate(['/listaUsuarios'])
      Swal.fire('Nuevo cliente', `Customer ${this.customer.name} creado con éxito!`, 'success')
    }
    );
  }



}
