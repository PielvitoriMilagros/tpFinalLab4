import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Turno } from '../clases/turno';

@Injectable({
  providedIn: 'root'
})
export class TurnosService {

  listaTurnos;

  constructor(private firebaseTurnos:AngularFireDatabase, private http:HttpClient) { 

    this.listaTurnos= firebaseTurnos.object('turnos').valueChanges().pipe(map(datos=>{return this.objecToArray(datos)}));
  
  }

altaTurno(turno:Turno){
  return this.http.post(environment.firebaseConfig.databaseURL+"/turnos.json",turno);
}

cambiarEstadoTurno(id:string,estad:string){
  return this.http.patch(environment.firebaseConfig.databaseURL+"/turnos/"+id+".json",{estado:estad}).subscribe(resp=>{
  });
}

updateTurno(id:string,turno:Turno){
  return this.http.patch(environment.firebaseConfig.databaseURL+"/turnos/"+id+".json",turno).subscribe(resp=>{
  });
}

getTurnos(){
  return this.listaTurnos;
}

getTurnosByPaciente(email:string){
  return this.http.get(environment.firebaseConfig.databaseURL+"/turnos.json").pipe(map(resp=>{
    return this.filtrarPorMailPaciente(resp,email)}));
}

getTurnosByProfesional(email:string){
  return this.http.get(environment.firebaseConfig.databaseURL+"/turnos.json").pipe(map(resp=>{
    return this.filtrarPorMailProfesional(resp,email)}));
}




filtrarPorMailPaciente(res:any,email:string){
  let turnos;
  let aux=[];
  turnos=this.objecToArray(res);
    for (let index = 0; index < turnos.length; index++) {
      const element = turnos[index];
      if (element.paciente.email == email) {
        aux.push(element);
      }
    }
    return aux;
}


filtrarPorMailProfesional(res:any,email:string){
  let turnos;
  let aux=[];
  turnos=this.objecToArray(res);
    for (let index = 0; index < turnos.length; index++) {
      const element = turnos[index];
      if (element.profesional.email == email) {
        aux.push(element);
      }
    }
    return aux;
}


  private objecToArray( datos: Object ){
    const turnos = [];
    if(datos == null) return [];

    Object.keys( datos ).forEach( key =>{
          let turno: any = datos[key];
          turno.id=key;
          turnos.push(turno);
        
    })
    return turnos;
  }


}
