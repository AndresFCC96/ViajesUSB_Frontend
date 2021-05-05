import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-usuarios-panel',
  templateUrl: './usuarios-panel.component.html',
  styleUrls: ['./usuarios-panel.component.css']
})
export class UsuariosPanelComponent implements OnInit {

  customers: Customer[] = [
    {email: "sergioRoberto@hotmail.com",
  name: "Sergio Roberto Algarete" ,
  address: "carrera 21 #45-60" ,
  phone: "51651223" ,
  token: "sag254a2w",
  enable: "A"}, {email: "sergioRoberto@hotmail.com",
name: "Sergio Roberto Algarete" ,
address: "carrera 21 #45-60" ,
phone: "51651223" ,
token: "sag254a2w",
enable: "A"}, {email: "sergioRoberto@hotmail.com",
name: "Sergio Roberto Algarete" ,
address: "carrera 21 #45-60" ,
phone: "51651223" ,
token: "sag254a2w",
enable: "A"}, {email: "sergioRoberto@hotmail.com",
name: "Sergio Roberto Algarete" ,
address: "carrera 21 #45-60" ,
phone: "51651223" ,
token: "sag254a2w",
enable: "A"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
