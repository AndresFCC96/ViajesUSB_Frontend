import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Tipodestino } from 'src/app/domain/tipo-destino';
import { TipoDestinoService } from 'src/app/service/tipo-destino.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-save-tipo-destino',
  templateUrl: './save-tipo-destino.component.html',
  styleUrls: ['./save-tipo-destino.component.css']
})
export class SaveTipoDestinoComponent implements OnInit {

  activo:string = "A";
  inactivo:string = "I";
  estado: string;
  listEstados: string[] = ["A", "I"];
  tipoDestino: Tipodestino;
  form: FormGroup;

  constructor(private tipoDestinoService:TipoDestinoService,
    private router:Router,
    private formsBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formsBuilder.group(
      {
          'nombre': '',
          'codigo': '',
          'descripcion': '',
          'usuCreador': '',
          'estado': ''
      }
    );
    console.log(this.estado);

  }

  selectEstado (event: any){
    this.estado = event.target.value;
    this.tipoDestino.estado = this.estado
    console.log(event.target.value);
    // console.log(this.tipoDestino.estado)
    // console.log(this.estado)
  }

  guardarTipoDestino(){
    let nombreTide = this.form.controls.nombre.value;
    let codigoTide = this.form.controls.codigo.value;
    let descripcionTide = this.form.controls.descripcion.value;
    let usucreadorTide = this.form.controls.usuCreador.value;
    let estadoTide = this.form.controls.estado.value;
    let tipoDestino = new Tipodestino();
    tipoDestino.nombre = nombreTide;
    tipoDestino.codigo = codigoTide;
    tipoDestino.descripcion = descripcionTide;
    tipoDestino.fechaCreacion = new Date;
    tipoDestino.usuCreador = usucreadorTide;
    tipoDestino.estado = estadoTide;
    this.tipoDestinoService.save(tipoDestino).subscribe(resp => {
      this.router.navigate(['/Dashboard/TipoDestinoList'])
      Swal.fire('Nuevo tipo destino', `Tipo Destino ${tipoDestino.nombre} creado con éxito!`, 'success')
    })
    console.log(tipoDestino)
  }
}
