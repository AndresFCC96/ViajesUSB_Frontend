import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Tipodestino } from '../domain/tipo-destino';

@Injectable({
  providedIn: 'root'
})
export class TipoDestinoService {

  private url: string = `${environment.apiBaseUrl}/api/tipoDestino/`;

  constructor(public httpClient: HttpClient) { }

  public findAll(): Observable<any> {
    return this.httpClient.get(`${this.url}/getTiposDestino`).pipe(
      catchError(e => {
        Swal.fire('Error al consultar', e.error, 'error');
        return throwError(e);
      })
    );
  }
  public findById(id:number): Observable<any> {
    return this.httpClient.get(`${this.url}/getTiposDestinoPorId?id=${id}`).pipe(
      catchError(e => {
        Swal.fire('Error al consultar', e.error, 'error');
        return throwError(e);
      })
    );
  }

  public findCount(): Observable<number> {
    return this.httpClient.get<number>(`${this.url}getCountTipoDestinos`).pipe(
      catchError(e => {
        Swal.fire('Error al consultar', e.error, 'error');
        return throwError(e);
      })
    );
  }

  consultarClientesLike(name:string):Observable<Tipodestino[]>{
    return this.httpClient.get<Tipodestino[]>(`${this.url}likeNombreCliente/${name}`);

  }

  public save(tipoDestino: Tipodestino): Observable<Tipodestino> {
    return this.httpClient.post<Tipodestino>(`${this.url}createTipoDestino`, tipoDestino).pipe(
      catchError(e => {
        Swal.fire('Error al consultar', e.error, 'error');
        return throwError(e);
      })
    );
  }

  public update(tipoDestinoAEditar: Tipodestino): Observable<any> {
    return this.httpClient.put(`${this.url}putTiposDestino`, tipoDestinoAEditar).pipe(
      catchError(e => {
        Swal.fire('Error al consultar', e.error, 'error');
        return throwError(e);
      })
    );
  }

  public delete(tipoDestino: Tipodestino): Observable<any> {
    return this.httpClient.post(`${this.url}deleteTiposDestino`,tipoDestino).pipe(
      catchError(e => {
        Swal.fire('Error al consultar', e.error, 'error');
        return throwError(e);
      })
    );
  }

}
