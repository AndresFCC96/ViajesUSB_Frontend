import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from './customer.service';
import { Router } from '@angular/router';
import { EditformComponent } from '../editform/editform.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-usuarios-panel',
  templateUrl: './usuarios-panel.component.html',
  styleUrls: ['./usuarios-panel.component.css']
})
export class UsuariosPanelComponent implements OnInit {

  public customers: Customer[]
  public email: string

  public editForm: EditformComponent

  constructor(private customerService: CustomerService,
    public router: Router ){}

  ngOnInit(){
    this.cargarCliente()

  }
  public cargarCliente(): void {
    this.customerService.consultarCustomers().subscribe(
      (response: Customer[]) => 
      { console.log(response);
      
        this.customers = response;}
    );

  }

  public delete(email: string): void {
    Swal.fire({
      title: '¿Estas seguro que quieres eliminar?',
      text: "¡Esto no se va a poder revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Si, eliminalo!'
    }) .then((result) => {
      if (result.isConfirmed) {
        this.customerService.eliminarCustomers(email)
        .subscribe(() => {
        }, (error: HttpErrorResponse) => { console.log(error);
        
          alert(error.message); }, 
          () => {this.cargarCliente()}
        );
        Swal.fire('Eliminado con exito!', '', 'success')
      }
    })
  }
}
