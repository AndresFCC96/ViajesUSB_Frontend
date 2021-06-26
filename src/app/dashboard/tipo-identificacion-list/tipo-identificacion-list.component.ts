import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TipoIdentificacion } from 'src/app/domain/tipo-identificacion';
import { TipoIdentificacionService } from 'src/app/service/tipo-identificacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tipo-identificacion-list',
  templateUrl: './tipo-identificacion-list.component.html',
  styleUrls: ['./tipo-identificacion-list.component.css']
})
export class TipoIdentificacionListComponent implements OnInit {

  public tipoIdentificaciones:TipoIdentificacion[]

  constructor(private tipoIdentificacionService:TipoIdentificacionService) { }

  ngOnInit(): void {
    this.listarTipoIdentificacion();
  }

  listarTipoIdentificacion(): void{
    this.tipoIdentificacionService.findAll().subscribe( tiidData => {
      this.tipoIdentificaciones = tiidData;
    })
  }


  public delete(codigo:string): void {
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
        this.tipoIdentificacionService.delete(codigo)
        .subscribe(() => {
        }, (error: HttpErrorResponse) => { console.log(error);

          // alert(error.message); },
          // () => {this.listarTipoIdentificacion()}
        // );
        });
        Swal.fire('Eliminado con exito!', '', 'success')
      }
    })
  }
}
