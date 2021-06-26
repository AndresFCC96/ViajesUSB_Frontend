import { TipoIdentificacion } from './../domain/tipo-identificacion';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TipoIdentificacionService {
  private url: string = `${environment.apiBaseUrl}/api/TipoIdentificacion/`;
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(public httpClient: HttpClient) { }

  public findAll(): Observable<TipoIdentificacion[]> {
    return this.httpClient.get<TipoIdentificacion[]>(`${this.url}getTiposIdentificacion`);
  }

  public findById(id:number):Observable<any>{
    return this.httpClient.get(`${this.url}getTiposIdentificacionPorId?id=${id}`).pipe(
      catchError(e => {
        Swal.fire('Error al consultar', e.error, 'error');
        return throwError(e);
      })
    );
  }

  public findCount(): Observable<number> {
    return this.httpClient.get<number>(`${this.url}getCountTiposIdentificacion`).pipe(
      catchError(e => {
        Swal.fire('Error al consultar', e.error, 'error');
        return throwError(e);
      })
    );
  }

  public save(tipoId:TipoIdentificacion ): Observable<any> {
    return this.httpClient.post(`${this.url}nuevoTipoIdentificacion`,tipoId).pipe(
      catchError(e => {
        Swal.fire('Error al consultar', e.error, 'error');
        return throwError(e);
      })
    );
  }

  public update(user:TipoIdentificacion): Observable<any>{
    return this.httpClient.put(`${this.url}actualizarTipoIdentificacion`,user).pipe(
      catchError(e => {
        Swal.fire('Error al consultar', e.error, 'error');
        return throwError(e);
      })
    );
  }

  public delete(codigo:string):Observable<any>{
    return this.httpClient.delete(`${this.url}eliminarTipoIdentificacion?codigo=${codigo}`).pipe(
      catchError(e => {
        Swal.fire('Error al consultar', e.error, 'error');
        return throwError(e);
      })
    );
  }
}
