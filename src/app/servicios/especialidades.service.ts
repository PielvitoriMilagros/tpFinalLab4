import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  constructor(private firestore: AngularFirestore) { }

  listaEspecialidades;

  public getEspecialidades(){
    // this.listaEspecialidades = this.firestore.collection('especialidades').snapshotChanges();
    return this.firestore.collection('especialidades').snapshotChanges();
  }








}
