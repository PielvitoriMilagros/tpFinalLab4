import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private auth:AngularFireAuth) {



   }


   registrarCuenta(email:string,pass:string){
    return this.auth.createUserWithEmailAndPassword(email,pass);
   }

   iniciarSesion(email:string,pass:string){
     return this.auth.signInWithEmailAndPassword(email,pass);
   }

   cerrarSesion(){
     return this.auth.signOut();
   }

   currentUser(){
     return this.auth.currentUser;
   }



   public logueado(){
    return this.auth.currentUser.then(resp=>{
      if(resp)
        return true;
      else
        return false;
      
    });
  }














}
