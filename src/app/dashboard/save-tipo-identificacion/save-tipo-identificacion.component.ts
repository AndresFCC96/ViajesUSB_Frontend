import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoIdentificacion } from 'src/app/domain/tipo-identificacion';
import { TipoIdentificacionService } from 'src/app/service/tipo-identificacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-save-tipo-identificacion',
  templateUrl: './save-tipo-identificacion.component.html',
  styleUrls: ['./save-tipo-identificacion.component.css']
})
export class SaveTipoIdentificacionComponent implements OnInit {

  activo:string = "A";
  inactivo:string = "I";
  estado: string;
  form: FormGroup;
  tipoIdentificacion: TipoIdentificacion;

  constructor(private router:Router,
    private formsBuilder:FormBuilder,
    private tipoIdentificacionService:TipoIdentificacionService) { }

  ngOnInit(): void {
    this.form = this.formsBuilder.group(
      {
          'nombre': '',
          'codigo': '',
          'usuCreador': '',
          'estado': ''
      }
    );
  }

  selectEstado (event: any){
    this.estado = event.target.value;
    this.tipoIdentificacion.estado = this.estado
    console.log(this.estado)
  }

  guardarTipoIdentificacion(): void{
    let nombreTiid = this.form.controls.nombre.value;
    let codigoTiid = this.form.controls.codigo.value;
    let usucreadorTiid = this.form.controls.usuCreador.value;
    let estadoTiid = this.form.controls.estado.value;
    let tipoIdentificacion = new TipoIdentificacion();
    tipoIdentificacion.nombre = nombreTiid;
    tipoIdentificacion.codigo = codigoTiid;
    tipoIdentificacion.fechaCreacion = new Date;
    tipoIdentificacion.usuCreador = usucreadorTiid;
    tipoIdentificacion.estado = estadoTiid;
    this.tipoIdentificacionService.save(tipoIdentificacion).subscribe(resp => {
      this.router.navigate(['/Dashboard/TipoIdentificacionList'])
      Swal.fire('Nuevo tipo destino', `Tipo Destino ${tipoIdentificacion.nombre} creado con éxito!`, 'success')
    })
    console.log(tipoIdentificacion)
  }

}
