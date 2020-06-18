import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {

  constructor(
    private storage: AngularFireStorage
  ) { }

  //Subir archivo
  public subirArchivo(nombreArchivo: string, datos: any,meta:any) {
    return this.storage.upload(nombreArchivo, datos,{customMetadata:meta});
  }

  //Link público del archivo subido
  public linkArchivoPublic(nombreArchivo: string) {
    return this.storage.ref(nombreArchivo);
  }
}