import { Component, OnInit } from '@angular/core';
import { Destino } from 'src/app/domain/destino';
import { DestinoService } from 'src/app/service/destino.service';

@Component({
  selector: 'app-destino-cards',
  templateUrl: './destino-cards.component.html',
  styleUrls: ['./destino-cards.component.css']
})
export class DestinoCardsComponent implements OnInit {

  destinos: Destino[];

  constructor(private destinoService:DestinoService) { }

  ngOnInit(): void {
    this.listarDestinos();
  }

  listarDestinos(): void{
    this.destinoService.findAll().subscribe(destino => {
      this.destinos = destino;
    })
  }

  // busqueda(): void {
  //   if (this.like === null || this.like === '') {
  //     this.findALLDestinos();

  //   } else {
  //     this.destinoService.findProductLike(this.like).subscribe(data => {
  //       this.listDestinoos = data;
  //     }, error => {
  //       console.log(error);
  //     });
  //   }
  // }
}
