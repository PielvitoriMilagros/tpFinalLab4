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

   














}
