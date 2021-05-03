import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerLogin } from '../domain/customer-login';

@Injectable({
  providedIn: 'root'
})
export class AuthCustomerService {
  
  private url :string = environment.apiUrl+'api/customer/';


  constructor(public httpClient:HttpClient) { }


  createTokenHeader():HttpHeaders{
    let token=localStorage.getItem('token');
    let headers=new HttpHeaders({'Authorization':token});
    return headers;
  }

  public loginByEmailAndToken(customer:CustomerLogin):Observable<any>{

    let headers=this.createTokenHeader();
    
    return this.httpClient.post(this.url+'loginCustomerAuth',customer,{headers:headers}); 

    
  }

  public customerIsAuth():boolean{
    let estaLoggeado=false;
    if(!!localStorage.getItem("customerEmail")){
        estaLoggeado=true;
    }
    return estaLoggeado;

  }
 
  
  public cerrarsesion():void{
    localStorage.removeItem("customerEmail");
  }




}
