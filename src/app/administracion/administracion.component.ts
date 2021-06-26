import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.html',
  styleUrls: ['./administracion.css']
})
export class AdministracionComponent implements OnInit {

  public nombre = "Andres";

  constructor() { }

  ngOnInit(): void {
  }

}
