import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/domain/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: string
  public contra: string
  public user: Usuario
  // public : Usuario

  constructor(public router: Router,
    public usuarioService:UsuarioService) { }

  ngOnInit(): void {
  }

  public loggearse(): void{
    let usuarioLogin = new Usuario(this.usuario, this.contra);
    this.usuarioService.loginUsuario(usuarioLogin).subscribe(resp => {
      this.user = resp;
      if(resp){
        this.router.navigate(['/Dashboard'])
      }
    })


  }

}
