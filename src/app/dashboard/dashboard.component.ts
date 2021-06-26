import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TipoIdentificacion } from '../domain/tipo-identificacion';
import { ClienteService } from '../service/cliente.service';
import { DestinoService } from '../service/destino.service';
import { TipoDestinoService } from '../service/tipo-destino.service';
import { TipoIdentificacionService } from '../service/tipo-identificacion.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  clientes: number;
  tipoIdentificaciones: number;
  destinos: number;
  tiposDestinos: number;
  nombre: string = "Andres";

  constructor(private clienteService:ClienteService,
    private tipoIdentificacionService:TipoIdentificacionService,
    private destinoService:DestinoService,
    private tipoDestinoService:TipoDestinoService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let params = this.activatedRoute.snapshot.paramMap.get('Id');
    this.contarClientes();
    this.contarDestinos();
    this.contarTiposIdentificacion();
    this.contarTiposDestinos();
  }

  contarClientes(): void{
    this.clienteService.findCount().subscribe(countClientes => {
      this.clientes = countClientes;
    })
  }

  contarTiposIdentificacion(): void{
    this.tipoIdentificacionService.findCount().subscribe(countTiid => {
      this.tipoIdentificaciones = countTiid;
    })
  }

  contarDestinos(): void{
    this.destinoService.findCount().subscribe(countDestinos => {
      this.destinos = countDestinos;
    })
  }

  contarTiposDestinos(): void{
    this.tipoDestinoService.findCount().subscribe(countTide => {
      this.tiposDestinos = countTide;
    })
  }
}
