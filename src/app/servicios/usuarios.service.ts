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

  getUsuarioByEmail(email:string){
    // Antes de devolver la info a la que me suscribo, paso por el map
    return this.http.get(environment.firebaseConfig.databaseURL+"/usuarios.json").pipe(map(resp=>{
      return this.filtrarPorMail(resp,email)}));
  }

  getUsuarioByTipo(tipo:string){
    return this.http.get(environment.firebaseConfig.databaseURL+"/usuarios.json").pipe(map(resp=>{
      return this.filtrarPorTipo(resp,tipo)}));
  }

  getUsuarioById(id:string){
    return this.http.get(environment.firebaseConfig.databaseURL+"/usuarios.json").pipe(map(resp=>{
      return this.filtrarPorId(resp,id)}));
  }


//  this.http.patch('mi host/pedidos/id.json, {estado:'nuevo estado'} )
//  public aceptarTurno( idTurno:string){
//     return this.httpClient.patch(`${environment.hostFirebase}/turnos/${idTurno}.json`,{estado:"APROBADO"});
//   }

  cambiarEstadoProfesional(id:string,estad:boolean){
    return this.http.patch(environment.firebaseConfig.databaseURL+"/usuarios/"+id+".json",{estado:estad}).subscribe(resp=>{
    });
    
 }






  filtrarPorMail(res:any,email:string){
    let usuarios;
    let aux=null;
    usuarios=this.objecToArray(res);
      for (let index = 0; index < usuarios.length; index++) {
        const element = usuarios[index];
        if (element.email == email) {
          aux = element;
        }
      }
      return aux;
  }

  filtrarPorId(res:any,id:string){
    let usuarios;
    let aux=null;
    usuarios=this.objecToArray(res);
      for (let index = 0; index < usuarios.length; index++) {
        const element = usuarios[index];
        if (element.id == id) {
          aux = element;
        }
      }
      return aux;
  }

  filtrarPorTipo(res:any,tipo:string){
    let usuarios;
    let aux=[];
    usuarios=this.objecToArray(res);
      for (let index = 0; index < usuarios.length; index++) {
        const element = usuarios[index];
        if (element.tipoDeUsuario == tipo) {
          aux.push(element);
        }
      }
      return aux;
  }


  private objecToArray( datos: Object ){
    const users = [];
    if(datos == null) return [];

    Object.keys( datos ).forEach( key =>{
          let user: any = datos[key];
          user.id=key;
          users.push(user);
        
    })
    return users;
  }

}
