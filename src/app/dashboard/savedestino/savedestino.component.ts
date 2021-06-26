import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Destino } from 'src/app/domain/destino';
import { Tipodestino } from 'src/app/domain/tipo-destino';
import { DestinoService } from 'src/app/service/destino.service';
import { TipoDestinoService } from 'src/app/service/tipo-destino.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-savedestino',
  templateUrl: './savedestino.component.html',
  styleUrls: ['./savedestino.component.css']
})
export class SavedestinoComponent implements OnInit {

  si:string = "S";
  no:string = "N";
  tierra: string;
  aire: string;
  mar: string;
  tiidCodigo: string;
  form: FormGroup;
  destino:Destino;
  tipoDestinos:Tipodestino[]

  constructor(private destinoService:DestinoService,
    private tipoDestinoService:TipoDestinoService,
    private router:Router,
    private formsBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formsBuilder.group(
      {
          'nombre': '',
          'codigo': '',
          'descripcion': '',
          'aire': '',
          'mar': '',
          'tierra': '',
          'usuCreador': '',
          'tipoDestinoCodigo': '',
          'estado': ''
      }
    );
    this.findAllTiposDestinos();
  }


  selectAire (event: any){
    this.aire = event.target.value;
    this.destino.aire = this.aire;
    console.log(this.aire);
  }
  selectMar(event: any){
    this.mar = event.target.value;
    this.destino.mar = this.mar;
    console.log(this.mar);
  }
  selectTierra (event: any){
    this.tierra = event.target.value;
    this.destino.tierra = this.tierra;
    console.log(this.tierra);
  }
  selectTipoDestino (event: any){
    this.tiidCodigo = event.target.value;
    this.destino.tipoDestinoCodigo = this.tiidCodigo;
  }
  guardarDestino(): void{
    let nombreDest = this.form.controls.nombre.value;
    let codigoDest = this.form.controls.codigo.value;
    let descripcionDest = this.form.controls.descripcion.value;
    let aireDest = this.form.controls.aire.value;
    let marDest = this.form.controls.mar.value;
    let tierraDest = this.form.controls.tierra.value;
    let tideDest = this.form.controls.tipoDestinoCodigo.value;
    let usucreadorDest = this.form.controls.usuCreador.value;
    let estadoDest = this.form.controls.estado.value;
    let destino = new Destino();
    destino.nombre = nombreDest;
    destino.codigo = codigoDest;
    destino.descripcion = descripcionDest;
    destino.fechaCreacion = new Date;
    destino.aire = aireDest;
    destino.mar = marDest;
    destino.tierra = tierraDest;
    destino.tipoDestinoCodigo = tideDest;
    destino.usuCreador = usucreadorDest;
    destino.estado = estadoDest;
    this.destinoService.save(destino).subscribe(resp => {
      this.router.navigate(['/Dashboard/DestinoList'])
      Swal.fire('Nuevo tipo destino', `Tipo Destino ${destino.nombre} creado con éxito!`, 'success')
    })
    console.log(destino)
  }
  findAllTiposDestinos(): void{
    this.tipoDestinoService.findAll().subscribe(tide =>{
      this.tipoDestinos = tide;
    })
  }
}
