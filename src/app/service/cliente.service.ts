import { environment } from 'src/environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Cliente } from '../domain/cliente';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url: string = `${environment.apiBaseUrl}api/Clientes/`;
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(public httpClient: HttpClient) { }

  public findAll(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(`${this.url}getClientes`).pipe(
      catchError(e => {
        Swal.fire('Error al consultar', e.error, 'error');
        return throwError(e);
      })
    );
  }

  public findById(id:number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${this.url}getClientePorId?id=${id}`).pipe(
      catchError(e => {
        Swal.fire('Error al consultar', e.error, 'error');
        return throwError(e);
      })
    );
  }

  public findCount(): Observable<number> {
    return this.httpClient.get<number>(`${this.url}getCountClientes`).pipe(
      catchError(e => {
        Swal.fire('Error al consultar', e.error, 'error');
        return throwError(e);
      })
    );
  }

  consultarClientesLike(name:string):Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${this.url}likeNombreCliente/${name}`).pipe(
      catchError(e => {
        Swal.fire('Error al consultar', e.error, 'error');
        return throwError(e);
      })
    );

  }

  public save(cliente:Cliente ): Observable<any> {
    return this.httpClient.post(`${this.url}nuevoCliente`,cliente).pipe(
      catchError(e => {
        Swal.fire('Error al consultar', e.error, 'error');
        return throwError(e);
      })
    );
  }
  public update(user:Cliente): Observable<any>{
    return this.httpClient.put(`${this.url}actualizarCliente`, user).pipe(
      catchError(e => {
        Swal.fire('Error al consultar', e.error, 'error');
        return throwError(e);
      })
    );
  }

  public delete(cliente: Cliente):Observable<any>{
    return this.httpClient.post(`${this.url}eliminarCliente`,cliente).pipe(
      catchError(e => {
        Swal.fire('Error al consultar', e.error, 'error');
        return throwError(e);
      })
    );
  }
}
