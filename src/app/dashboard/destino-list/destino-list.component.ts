import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Destino } from 'src/app/domain/destino';
import { DestinoService } from 'src/app/service/destino.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-destino-list',
  templateUrl: './destino-list.component.html',
  styleUrls: ['./destino-list.component.css']
})
export class DestinoListComponent implements OnInit {

  public destinos: Destino[]
  public destino: Destino

  constructor(private destinoService:DestinoService) { }

  ngOnInit(): void {
    this.listarDestinos()
  }

  listarDestinos(){
    this.destinoService.findAll().subscribe( dest => {
      this.destinos = dest
      console.log(dest)
    })
  }

  buscarPorId(id:number){
    this.destinoService.findById(id).subscribe(tiid => {
      this.destino = tiid
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
        console.log(this.destino);

        this.destinoService.delete(this.destino)
        .subscribe(() => {
        }, (error: HttpErrorResponse) => { console.log(error);

          alert(error.message); },
          () => {this.listarDestinos()}
        );
        Swal.fire('Eliminado con exito!', '', 'success')
      }
    })
  }
}
