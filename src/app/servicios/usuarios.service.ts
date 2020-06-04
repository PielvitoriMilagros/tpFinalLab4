import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  listaUsuarios;


  constructor(private firebaseUsuarios:AngularFireDatabase, private http:HttpClient) {
    
    this.listaUsuarios= firebaseUsuarios.object('usuarios').valueChanges().pipe(map(datos=>{return this.objecToArray(datos)}));

   }

   altaUsuario(user:Usuario){
     
     return this.http.post(environment.firebaseConfig.databaseURL+"/usuarios.json",user);
     
// altaUsuario(email:string,password:string,imagen:string){
// return this.http.post(environment.firebaseConfig.databaseURL+"/usuarios.json",{email:email,pass:password,imagen:imagen});

// Traerme un usuario por ID
//    this.http.get(environment.firebaseConfig.databaseURL+"/usuarios/id.json")
  }

  getUsuarios(){
    return this.listaUsuarios;
  }


  private objecToArray( datos: Object ){
    const mesas = [];
    if(datos == null) return [];

    Object.keys( datos ).forEach( key =>{
          let mesa: any = datos[key];
          // mesa.id=key;
          mesas.push(mesa);
        
    })
    return mesas;
  }

}
