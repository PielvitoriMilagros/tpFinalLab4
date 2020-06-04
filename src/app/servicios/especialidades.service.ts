import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Especialidad } from '../clases/especialidad';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  constructor(private firestore: AngularFirestore,private firebaseEspecialidades:AngularFireDatabase, private http:HttpClient) {
    this.listaEspecialidades= firebaseEspecialidades.object('especialidades').valueChanges().pipe(map(datos=>{return this.objecToArray(datos)}));
   }

  listaEspecialidades;

  // public getEspecialidades(){
  //   // this.listaEspecialidades = this.firestore.collection('especialidades').snapshotChanges();
  //   return this.firestore.collection('especialidades').snapshotChanges();
  // }


  public getEspecialidades(){
     return this.listaEspecialidades;
    // return this.http.get(environment.firebaseConfig.databaseURL+"/especialidades.json");
  }

  public altaEspecialidad(especialidad:Especialidad){
    return this.http.post(environment.firebaseConfig.databaseURL+"/especialidades.json",especialidad);
  }





  private objecToArray( datos: Object ){
    const especialidades = [];
    if(datos == null) return [];

    Object.keys( datos ).forEach( key =>{
          let especialidad: Especialidad = datos[key];
          especialidad.id=key;
          especialidades.push(especialidad);
        
    })
    return especialidades;
  }


}
