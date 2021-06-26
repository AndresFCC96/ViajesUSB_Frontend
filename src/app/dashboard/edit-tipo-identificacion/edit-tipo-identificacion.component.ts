import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoIdentificacion } from 'src/app/domain/tipo-identificacion';
import { TipoIdentificacionService } from 'src/app/service/tipo-identificacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-tipo-identificacion',
  templateUrl: './edit-tipo-identificacion.component.html',
  styleUrls: ['./edit-tipo-identificacion.component.css']
})
export class EditTipoIdentificacionComponent implements OnInit {

  activo:string = "A";
  inactivo:string = "I";
  estado: string;
  form: FormGroup;
  tipoIdentificacion: TipoIdentificacion;
  tiid: number

  constructor(private router:Router,
    private formsBuilder:FormBuilder,
    private tipoIdentificacionService:TipoIdentificacionService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let params = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.tiid = params
    console.log(this.tiid);
    this.form = this.formsBuilder.group(
      {
          'nombre': '',
          'codigo': '',
          'usuCreador': '',
          'usuModificador': '',
          'estado': ''
      }
    );if(this.tiid){
      this.buscarPorId();
    }
  }

  selectEstado (event: any){
    this.estado = event.target.value;
    this.tipoIdentificacion.estado = this.estado
    console.log(this.estado)
  }


  buscarPorId(): void{
    this.tipoIdentificacionService.findById(this.tiid).subscribe(tid => {
      this.form.controls.nombre.setValue(tid.nombre);
      this.form.controls.codigo.setValue(tid.codigo);
      this.form.controls.usuCreador.setValue(tid.usuCreador);
      this.form.controls.usuModificador.setValue(tid.usuModificador);
      this.form.controls.estado.setValue(tid.estado);
    });
  }

  editarTipoIdentificacion(): void{
    let nombreTiid = this.form.controls.nombre.value;
    let codigoTiid = this.form.controls.codigo.value;
    let usucreadorTiid = this.form.controls.usuCreador.value;
    let usumodificadorTiid = this.form.controls.usuModificador.value;
    let estadoTiid = this.form.controls.estado.value;
    let tipoIdentificacion = new TipoIdentificacion();
    tipoIdentificacion.idTiid = this.tiid;
    tipoIdentificacion.nombre = nombreTiid;
    tipoIdentificacion.codigo = codigoTiid;
    tipoIdentificacion.fechaCreacion = new Date;
    tipoIdentificacion.usuCreador = usucreadorTiid;
    tipoIdentificacion.usuModificador = usumodificadorTiid;
    tipoIdentificacion.estado = estadoTiid;
    this.tipoIdentificacionService.update(tipoIdentificacion).subscribe(resp => {
      this.router.navigate(['/Dashboard/TipoIdentificacionList'])
      Swal.fire('Tipo identificacion', `Tipo identificacion ${tipoIdentificacion.nombre} modificado con éxito!`, 'success')
    })
    console.log(tipoIdentificacion)
  }
}
