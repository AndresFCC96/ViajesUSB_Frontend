import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiServerUrl = environment.apiBaseUrl+'/api/Customers/';

  constructor(public http:HttpClient) { }

  createTokenHeader():HttpHeaders{
    let token=localStorage.getItem('token');
    let headers=new HttpHeaders({'Authorization':token});
    return headers;
}

  public consultarCustomers(): Observable<any> {
    // let headers=this.createTokenHeader();
    return this.http.get<any>(`${this.apiServerUrl}getCustomers`);
  }

  // public consultarCustomers(): Observable<any> {
  //   let headers=this.createTokenHeader();
  //   return this.httpClient.get(`${this.apiServerUrl}getCustomers`,{headers:headers});
  // }

  // public crearCustomers(): Observable<any> {
  //   return this.http.get<any>('${this.apiServerUrl}/Customers/postCustomer');
  // }
  //
  // public actualizarCustomers(): Observable<any> {
  //   return this.http.get<any>('${this.apiServerUrl}/Customers/putCustomers');
  // }
  //
  // public eliminarCustomers(): Observable<any> {
  //   return this.http.get<any>('${this.apiServerUrl}/Customers/deleteCustomers');
  // }

}
