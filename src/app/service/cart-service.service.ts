import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ShoppingCart } from '../domain/shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private url :string = environment.apiUrl+'api/cart/';




  constructor(public httpClient:HttpClient) { }


  createTokenHeader():HttpHeaders{
    let token=localStorage.getItem('token');
    let headers=new HttpHeaders({'Authorization':token});
    return headers;
  }

  public saveCart(email:string):Observable<any>{
    
    let headers=this.createTokenHeader();
    return this.httpClient.get(this.url+'createCart/'+email,{headers:headers});

  }

  public findCartActive(email:string):Observable<any>{
     
    let headers=this.createTokenHeader();
    return this.httpClient.get(this.url+'findShoppingCartActive/'+email,{headers:headers});


  }

  public findCart(carId:number):Observable<any>{
    let headers=this.createTokenHeader();
    return this.httpClient.get(this.url+'findCart/'+carId,{headers:headers});
  }

  public findCartById(carId:number):Observable<any>{
    let headers=this.createTokenHeader();
    return this.httpClient.get(this.url+'findByCarId/'+carId,{headers:headers});
  }


  public findShoppingProductByCarId(carId:number):Observable<any>{
  
    let headers=this.createTokenHeader();
    return this.httpClient.get(this.url+'findByCarId/'+carId,{headers:headers});


  }

  public addToCart(carId:number,proId:string, quantity:number):Observable<any>{
    let headers=this.createTokenHeader();
    return this.httpClient.get(this.url+'addProduct/'+carId+'/'+proId+"/"+quantity,{headers:headers});
  }


  public removeProduct(carId:number,proId:string):Observable<any>{
    let headers=this.createTokenHeader();
    return this.httpClient.get(this.url+'removeProduct/'+carId+'/'+proId,{headers:headers});

  }


  public findCompras(email:string):Observable<any>{
    let headers=this.createTokenHeader();
    return this.httpClient.get(this.url+'findCompras/'+email,{headers:headers});
  }

  
  public pagar(payId,carId):Observable<any>{

    let headers=this.createTokenHeader();
    return this.httpClient.get(this.url+'pagarCarro/'+carId+"/"+payId,{headers:headers});
  }


}
