import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Tipodestino } from 'src/app/domain/tipo-destino';
import { TipoDestinoService } from 'src/app/service/tipo-destino.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tipo-destino-list',
  templateUrl: './tipo-destino-list.component.html',
  styleUrls: ['./tipo-destino-list.component.css']
})
export class TipoDestinoListComponent implements OnInit {

  public tiposDestinos: Tipodestino[]
  public tipoDestino: Tipodestino

  constructor(private tipoDestinoService:TipoDestinoService) { }

  ngOnInit(): void {
    this.listarTodosLosTiposDestinos();
  }

  listarTodosLosTiposDestinos(): void{
    this.tipoDestinoService.findAll().subscribe( tideData => {
      this.tiposDestinos = tideData;
    })
  }

  buscarPorId(id:number){
    this.tipoDestinoService.findById(id).subscribe(tiid => {
      this.tipoDestino = tiid
    });
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
        console.log(this.tipoDestino);

        this.tipoDestinoService.delete(this.tipoDestino)
        .subscribe(() => {
        }, (error: HttpErrorResponse) => { console.log(error);

          alert(error.message); },
          () => {this.listarTodosLosTiposDestinos()}
        );
        Swal.fire('Eliminado con exito!', '', 'success')
      }
    })
  }

  busqueda(name:string){
    if (name === null || name === '') {
      this.listarTodosLosTiposDestinos();
    } else {
      this.tipoDestinoService.consultarClientesLike(name).subscribe(data => {
        this.tiposDestinos = data;
      }, error => {
        console.log(error);
      });
    }


  }
}
