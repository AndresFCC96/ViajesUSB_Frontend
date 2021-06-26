import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/domain/cliente';
import { TipoIdentificacion } from 'src/app/domain/tipo-identificacion';
import { ClienteService } from 'src/app/service/cliente.service';
import { TipoIdentificacionService } from 'src/app/service/tipo-identificacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {

  activo:string = "A";
  inactivo:string = "I";
  Masculino:string = "M";
  Femenino:string = "F";
  estado:string;
  sexo:string;
  tiid: number;
  idClie: number;
  form: FormGroup;
  cliente:Cliente;
  tiposIdentificacion:TipoIdentificacion[]

  constructor(private router:Router,
    private formsBuilder:FormBuilder,
    private clienteService:ClienteService,
    private tipoIdentificacionService:TipoIdentificacionService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let params = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.idClie = params
    console.log(this.idClie);
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
          'usuModificador': '',
          'estado': '',

      }
    );if(this.idClie){
      this.findById();
    }

    this.listarTodosLosTiposIdentificacion();
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

  findById(): void{
    this.clienteService.findById(this.idClie).subscribe(idclie => {
      this.form.controls.numeroIdentificacion.setValue(idclie.numeroIdentificacion);
      this.form.controls.nombre.setValue(idclie.nombre);
      this.form.controls.primerApellido.setValue(idclie.primerApellido);
      this.form.controls.segundoApellido.setValue(idclie.segundoApellido);
      this.form.controls.telefono1.setValue(idclie.telefono1);
      this.form.controls.telefono2.setValue(idclie.telefono2);
      this.form.controls.correo.setValue(idclie.correo);
      this.form.controls.sexo.setValue(idclie.sexo);
      this.form.controls.usuCreador.setValue(idclie.usuCreador);
      this.form.controls.usuModificador.setValue(idclie.usuModificador);
      this.form.controls.tipoIdentificacion.setValue(idclie.tipoIdentificacion);
      this.form.controls.estado.setValue(idclie.estado);
    });
  }

  editarCliente(): void{
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
    let usuModificadorCli = this.form.controls.usuModificador.value;
    let estadoCli = this.form.controls.estado.value;
    let cliente = new Cliente();
    cliente.idCLie = this.idClie;
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
    cliente.usuModificador = usuModificadorCli;
    cliente.estado = estadoCli;
    this.clienteService.update(cliente).subscribe(resp => {
      this.router.navigate(['/Dashboard/ClienteList'])
      Swal.fire('Cliente', `Cliente ${cliente.nombre} modificado con éxito!`, 'success')
    })
    console.log(cliente)
  }


}
