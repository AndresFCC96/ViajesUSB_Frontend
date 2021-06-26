import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tipodestino } from 'src/app/domain/tipo-destino';
import { TipoDestinoService } from 'src/app/service/tipo-destino.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-tipo-destino',
  templateUrl: './edit-tipo-destino.component.html',
  styleUrls: ['./edit-tipo-destino.component.css']
})
export class EditTipoDestinoComponent implements OnInit {

  activo:string = "A";
  inactivo:string = "I";
  estado: string;
  listEstados: string[] = ["A", "I"];
  tipoDestino: Tipodestino;
  form: FormGroup;
  tiid:number

  constructor(private tipoDestinoService:TipoDestinoService,
    private formsBuilder:FormBuilder,
    private router:Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let params = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.tiid = params
    console.log(this.tiid);

    this.form = this.formsBuilder.group(
      {
          'nombre': '',
          'codigo': '',
          'descripcion': '',
          'usuCreador': '',
          'estado': '',
          'usuModificador': ''
      }
    );
    if(this.tiid){
      this.buscarPorId();
  }

  }

  buscarPorId(){
    this.tipoDestinoService.findById(this.tiid).subscribe(tiid => {
      this.form.controls.nombre.setValue(tiid.nombre);
      this.form.controls.codigo.setValue(tiid.codigo);
      this.form.controls.descripcion.setValue(tiid.descripcion);
      this.form.controls.usuCreador.setValue(tiid.usuCreador);
      this.form.controls.usuModificador.setValue(tiid.usuModificador);
      this.form.controls.estado.setValue(tiid.estado);
    });
  }
  editarTipoDestino(){
    console.log(this.tiid);
    let nombreTide = this.form.controls.nombre.value;
    let codigoTide = this.form.controls.codigo.value;
    let descripcionTide = this.form.controls.descripcion.value;
    let usucreadorTide = this.form.controls.usuCreador.value;
    let usumodificadorTide = this.form.controls.usuModificador.value;
    let estadoTide = this.form.controls.estado.value;
    let tipoDestino = new Tipodestino();
    tipoDestino.idTide = this.tiid;
    tipoDestino.nombre = nombreTide;
    tipoDestino.codigo = codigoTide;
    tipoDestino.descripcion = descripcionTide;
    tipoDestino.fechaCreacion = new Date;
    tipoDestino.usuCreador = usucreadorTide;
    tipoDestino.usuModificador = usumodificadorTide;
    tipoDestino.estado = estadoTide;
    this.tipoDestinoService.update(tipoDestino).subscribe(resp => {
      this.router.navigate(['/Dashboard/TipoDestinoList'])
      Swal.fire('Tipo destino', ` ${tipoDestino.nombre} modificado con éxito!`, 'success')
    })
    console.log(tipoDestino)
  }

}
