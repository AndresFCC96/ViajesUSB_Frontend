import  Swal  from 'sweetalert2';
import { Destino } from './../domain/destino';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Cliente } from '../domain/cliente';


@Injectable({
  providedIn: 'root'
})
export class DestinoService {
  private url: string = `${environment.apiBaseUrl}/api/Destino/`;
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(public httpClient: HttpClient) { }

  public findAll(): Observable<Destino[]> {
    return this.httpClient.get<Destino[]>(`${this.url}getDestinos`).pipe(
      catchError(e => {
        Swal.fire('Error al consultar', e.error, 'error');
        return throwError(e);
      })
    );
  }

  public findById(id:number): Observable<Destino> {
    return this.httpClient.get<Destino>(`${this.url}/getDestinoPorId?id=${id}`).pipe(
      catchError(e => {
        Swal.fire('Error al consultar', e.error, 'error');
        return throwError(e);
      })
    );
  }

  public findCount(): Observable<number> {
    return this.httpClient.get<number>(`${this.url}getCountDestinos`).pipe(
      catchError(e => {
        Swal.fire('Error al consultar', e.error, 'error');
        return throwError(e);
      })
    );
  }

  public save(destino:Destino ): Observable<Destino> {
    return this.httpClient.post<Destino>(`${this.url}/createDestino`,destino).pipe(
      catchError(e => {
        Swal.fire('Error al consultar', e.error, 'error');
        return throwError(e);
      })
    );
  }
  public update(destino:Destino ): Observable<any>{
    return this.httpClient.put(`${this.url}/actualizarDestino`, destino).pipe(
      catchError(e => {
        Swal.fire('Error al consultar', e.error, 'error');
        return throwError(e);
      })
    );
  }

  public delete(destino:Destino ):Observable<any>{
    return this.httpClient.post(`${this.url}/eliminarDestino`, destino).pipe(
      catchError(e => {
        Swal.fire('Error al consultar', e.error, 'error');
        return throwError(e);
      })
    );
  }

  public findProductLike(destino: string): Observable<any>{
    return this.httpClient.get(this.url+'/destinoLike/'+destino);
  }

}
