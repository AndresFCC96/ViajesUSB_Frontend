import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/domain/cliente';
import { TipoIdentificacion } from 'src/app/domain/tipo-identificacion';
import { ClienteService } from 'src/app/service/cliente.service';
import { TipoIdentificacionService } from 'src/app/service/tipo-identificacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-savecliente',
  templateUrl: './savecliente.component.html',
  styleUrls: ['./savecliente.component.css']
})
export class SaveclienteComponent implements OnInit {

  activo:string = "A";
  inactivo:string = "I";
  Masculino:string = "M";
  Femenino:string = "F";
  estado:string;
  sexo:string;
  tiid: number;
  form: FormGroup;
  cliente:Cliente;
  tiposIdentificacion:TipoIdentificacion[]


  constructor(private router:Router,
    private formsBuilder:FormBuilder,
    private clienteService:ClienteService,
    private tipoIdentificacionService:TipoIdentificacionService) { }

  ngOnInit(): void {
    this.form = this.formsBuilder.group(
      {
          'numeroIdentificacion': '',
          'nombre': '',
          'primerApellido': '',
          'segundoApellido': '',
          'telefono1': '',
          'telefono2': '',
          'correo': '',
          'sexo': '',
          'fechaNacimiento': '',
          'tipoIdentificacion': '',
          'usuCreador': '',
          'estado': '',

      }
    );this.listarTodosLosTiposIdentificacion();
  }

  selectSexo (event: any){
    this.sexo = event.target.value;
    this.cliente.sexo = this.sexo;
  }

  selectEstado (event: any){
    this.estado = event.target.value;
    this.cliente.estado = this.estado;
  }

  selectTipoIdentificacion (event: any){
    this.tiid = event.target.value;
    this.cliente.tipoIdentificacion = this.tiid;
  }

  listarTodosLosTiposIdentificacion(): void{
    this.tipoIdentificacionService.findAll().subscribe(tiid => {
      this.tiposIdentificacion = tiid;
    })
  }

  guardarCliente(): void{
    let numeroIdentificacionCli = this.form.controls.numeroIdentificacion.value;
    let nombreCli = this.form.controls.nombre.value;
    let primerApellidoCli = this.form.controls.primerApellido.value;
    let segundoApellidoCli = this.form.controls.segundoApellido.value;
    let telefono1Cli = this.form.controls.telefono1.value;
    let telefono2Cli = this.form.controls.telefono2.value;
    let correoCli = this.form.controls.correo.value;
    let sexoCli = this.form.controls.sexo.value;
    let fechaNacimientoCli = this.form.controls.fechaNacimiento.value;
    let usuCreadorCli = this.form.controls.usuCreador.value;
    let estadoCli = this.form.controls.estado.value;
    let cliente = new Cliente();
    cliente.numeroIdentificacion = numeroIdentificacionCli;
    cliente.nombre = nombreCli;
    cliente.primerApellido = primerApellidoCli;
    cliente.segundoApellido = segundoApellidoCli;
    cliente.telefono1 = telefono1Cli;
    cliente.telefono2 = telefono2Cli;
    cliente.correo = correoCli;
    cliente.sexo = sexoCli;
    cliente.fechaNacimiento = fechaNacimientoCli;
    cliente.fechaCreacion = new Date;
    cliente.tipoIdentificacion = this.form.controls.tipoIdentificacion.value;
    cliente.usuCreador = usuCreadorCli;
    cliente.estado = estadoCli;
    this.clienteService.save(cliente).subscribe(resp => {
      this.router.navigate(['/Dashboard/ClienteList'])
      Swal.fire('Nuevo tipo destino', `Tipo Destino ${cliente.nombre} creado con éxito!`, 'success')
    })
    console.log(cliente)
  }
}
