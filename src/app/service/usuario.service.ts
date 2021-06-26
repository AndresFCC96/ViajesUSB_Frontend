import { Usuario } from './../domain/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url: string = `${environment.apiBaseUrl}/api/Usuarios/`;

  constructor(public httpClient: HttpClient) { }

  public loginUsuario(usuario:Usuario): Observable<any>{
    return this.httpClient.post(`${this.url}/logUsuario`, usuario).pipe(
      catchError(e => {
        Swal.fire('Error al consultar', e.error, 'error');
        return throwError(e);
      })
    );
  }

  public findAll(): Observable<any> {
    return this.httpClient.get(this.url+'/findAll');
  }
  public save(user:Usuario ): Observable<any> {
    return this.httpClient.post(this.url+'/save',user);
  }

  public update(user:Usuario): Observable<any>{
    return this.httpClient.put(this.url+'/update', user);
  }
  public delete(idUser:number):Observable<any>{
    return this.httpClient.delete(this.url+'/delete/'+idUser);
  }

}
