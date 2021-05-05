import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Swal } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthFireService {

  constructor(public angularFireAuth:AngularFireAuth,
              private router:Router) {
    this.angularFireAuth.authState.subscribe(user =>{

      if(user){

        if(user.emailVerified == false){

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Su cuenta no ha sido verificada',

          })
          this.signOut();

        }

        localStorage.setItem('user',JSON.stringify(user));
      }else{
        localStorage.removeItem('user');
      }

    })
   }


  public createUser(email:string, password:string){

    return this.angularFireAuth.createUserWithEmailAndPassword(email,password);

  }

  public login(email:string, password:string){
    return this.angularFireAuth.signInWithEmailAndPassword(email,password);
  }

  public signOut(){
    return this.angularFireAuth.signOut();
  }

  public async sendEmailVerification(){

    await (await this.angularFireAuth.currentUser).sendEmailVerification();
  }


  public sendPasswordResetEmail(email:string){
    return this.angularFireAuth.sendPasswordResetEmail(email);
  }


}
