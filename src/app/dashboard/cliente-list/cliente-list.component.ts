import { Component, OnInit, ViewChild } from '@angular/core';
import { Cliente } from 'src/app/domain/cliente';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClienteService } from 'src/app/service/cliente.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  public clientes:Cliente[] = [];
  public nombre:string;
  public cliente:Cliente

  // dataSource = new MatTableDataSource<Cliente>(this.clientes);

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // displayedColumns: string[] = ['Nombre', 'Primer Apellido', 'Segundo Apellido'];

  // form: FormGroup;

  constructor(private clienteService:ClienteService,
    ) { }

  ngOnInit(): void {
    // this.form = this.formsBuilder.group(
    //   {
    //       'Nombre': '',
    //       'Primer Apellido': '',
    //       'Segundo Apellido': ''
    //   })
    this.listarTodosLosClientes();
  }

  search(){

  }

  listarTodosLosClientes(): void{
    this.clienteService.findAll().subscribe( cli => {
      this.clientes = cli;
      console.table(this.clientes)
    })
  }

  buscarPorId(id:number){
    this.clienteService.findById(id).subscribe(clie => {
      this.cliente = clie;
    })
  }

  busqueda(name:string){
    if (name === null || name === '') {
      this.listarTodosLosClientes();
    } else {
      this.clienteService.consultarClientesLike(name).subscribe(data => {
        this.clientes = data;
      }, error => {
        console.log(error);
      });
    }


  }

  public delete(id:number): void {
    this.buscarPorId(id);
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
        console.log(this.clientes);

        this.clienteService.delete(this.cliente)
        .subscribe(() => {
        }, (error: HttpErrorResponse) => { console.log(error);

          alert(error.message); },
          () => {this.listarTodosLosClientes()}
        );
        Swal.fire('Eliminado con exito!', '', 'success')
      }
    })
  }
}
