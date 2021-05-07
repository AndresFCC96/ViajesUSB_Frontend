import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../usuarios-panel/customer';
import { CustomerService } from '../usuarios-panel/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {

  public customer: Customer = new Customer()

  constructor(public customerService: CustomerService,
    public router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  public update(): void {
    this.customerService.actualizarCustomers(this.customer).subscribe(customer => {
      this.router.navigate(['/listaUsuarios'])
      Swal.fire('Cliente actualizado', 
      `Customer con email ${this.customer.email} editado con éxito!`, 'success')
    }
    );
  }

}
