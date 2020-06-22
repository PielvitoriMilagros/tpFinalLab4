import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  listaLogs;

  constructor(private firebaseUsuarios:AngularFireDatabase, private http:HttpClient) {

    this.listaLogs= firebaseUsuarios.object('logUsuarios').valueChanges().pipe(map(datos=>{return this.objecToArray(datos)}));
    
   }


   altaLog(log){
    return this.http.post(environment.firebaseConfig.databaseURL+"/logUsuarios.json",log);
   }

   getLogs(){
     return this.listaLogs;
   }




   private objecToArray( datos: Object ){
    const logs = [];
    if(datos == null) return [];

    Object.keys( datos ).forEach( key =>{
          let log: any = datos[key];
          log.id=key;
          logs.push(log);
        
    })
    return logs;
  }


}
