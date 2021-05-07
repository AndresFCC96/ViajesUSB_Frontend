import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from './customer';
import { catchError } from 'rxjs/operators'
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiServerUrl = environment.apiBaseUrl+'/api/Customers/';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(public http:HttpClient) { }

//   createTokenHeader():HttpHeaders{
//     let token=localStorage.getItem('token');
//     let headers=new HttpHeaders({'Authorization':token});
//     return headers;
// }

  public consultarCustomers(): Observable<any> {
    return this.http.get<Customer>(`${this.apiServerUrl}getCustomers`);
  }

  public consultarCustomer(email: string): Observable<Customer>{
    return this.http.get<Customer>(`${this.apiServerUrl}getCustomersPorEmail/${email}`).pipe(
      catchError(e => {
        Swal.fire('Error al consultar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  public crearCustomers(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.apiServerUrl}postCustomer`,customer).pipe(
      catchError(e => {
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }
  
  public actualizarCustomers(customer: Customer): Observable<any> {
    return this.http.put<Customer>(`${this.apiServerUrl}putCustomers`, customer).pipe(
      catchError(e => {
        Swal.fire('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  
  public eliminarCustomers(email: string): Observable<any> {
    return this.http.delete(`${this.apiServerUrl}deleteCustomer/${email}`).pipe(
      catchError(e => {
        Swal.fire('Error al elimar cliente', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

}
