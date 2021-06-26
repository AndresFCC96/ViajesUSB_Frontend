import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Destino } from 'src/app/domain/destino';
import { Tipodestino } from 'src/app/domain/tipo-destino';
import { DestinoService } from 'src/app/service/destino.service';
import { TipoDestinoService } from 'src/app/service/tipo-destino.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-destino',
  templateUrl: './edit-destino.component.html',
  styleUrls: ['./edit-destino.component.css']
})
export class EditDestinoComponent implements OnInit {

  si:string = "S";
  no:string = "N";
  tierra: string;
  aire: string;
  mar: string;
  tiidCodigo: string;
  idDest: number;
  form: FormGroup;
  destino:Destino;
  tipoDestinos:Tipodestino[]

  constructor(private destinoService:DestinoService,
    private tipoDestinoService:TipoDestinoService,
    private router:Router,
    private formsBuilder:FormBuilder,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let params = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.idDest = params
    console.log(this.idDest);
    this.form = this.formsBuilder.group(
      {
          'nombre': '',
          'codigo': '',
          'descripcion': '',
          'aire': '',
          'mar': '',
          'tierra': '',
          'usuCreador': '',
          'usuModificador': '',
          'tipoDestinoCodigo': '',
          'estado': ''
      }
      );
      if(this.idDest){
        this.buscarPorId();
    }
    this.findAllTiposDestinos();
  }

  buscarPorId(){
    this.destinoService.findById(this.idDest).subscribe(tiid => {
      this.form.controls.nombre.setValue(tiid.nombre);
      this.form.controls.codigo.setValue(tiid.codigo);
      this.form.controls.aire.setValue(tiid.aire);
      this.form.controls.mar.setValue(tiid.mar);
      this.form.controls.tierra.setValue(tiid.tierra);
      this.form.controls.descripcion.setValue(tiid.descripcion);
      this.form.controls.usuCreador.setValue(tiid.usuCreador);
      this.form.controls.usuModificador.setValue(tiid.usuModificador);
      this.form.controls.estado.setValue(tiid.estado);
    });
  }


  editarDestino(): void{
    this.buscarPorId();
    let nombreDest = this.form.controls.nombre.value;
    let codigoDest = this.form.controls.codigo.value;
    let descripcionDest = this.form.controls.descripcion.value;
    let aireDest = this.form.controls.aire.value;
    let marDest = this.form.controls.mar.value;
    let tierraDest = this.form.controls.tierra.value;
    let tideDest = this.form.controls.tipoDestinoCodigo.value;
    let usucreadorDest = this.form.controls.usuCreador.value;
    let usumodificadorDest = this.form.controls.usuModificador.value;
    let estadoDest = this.form.controls.estado.value;
    let destino = new Destino();
    destino.idDest = this.idDest;
    destino.nombre = nombreDest;
    destino.codigo = codigoDest;
    destino.descripcion = descripcionDest;
    destino.fechaCreacion = new Date;
    destino.fechaModificacion = new Date;
    destino.aire = aireDest;
    destino.mar = marDest;
    destino.tierra = tierraDest;
    destino.tipoDestinoCodigo = tideDest;
    destino.usuCreador = usucreadorDest;
    destino.usuModificador = usumodificadorDest;
    destino.estado = estadoDest;
    this.destinoService.update(destino).subscribe(resp => {
      this.router.navigate(['/Dashboard/DestinoList'])
      Swal.fire('Destino', `Destino ${destino.nombre} modificado con éxito!`, 'success')
    })
    console.log(destino)
  }

  findAllTiposDestinos(): void{
    this.tipoDestinoService.findAll().subscribe(tide =>{
      this.tipoDestinos = tide;
    })
  }
}
