import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseStorageService } from 'src/app/servicios/firebase-storage.service';

@Component({
  selector: 'app-subir-imagen',
  templateUrl: './subir-imagen.component.html',
  styleUrls: ['./subir-imagen.component.css']
})
export class SubirImagenComponent implements OnInit {

  @Output() detalleImagen : EventEmitter<any> = new EventEmitter<any>();
  public archivoForm;
  constructor(private firebaseStorage: FirebaseStorageService) { }

  ngOnInit(): void {
    this.archivoForm = new FormGroup({
      archivo: new FormControl(null, Validators.required),
    });
  }

  public mensajeArchivo = 'No hay un archivo seleccionado';
  public datosFormulario = new FormData();
  public nombreArchivo = '';
  public URLPublica = '';
  public porcentaje = 0;
  public finalizado = false;


  public imgURL;

  //Evento que se gatilla cuando el input de tipo archivo cambia
  public cambioArchivo(event) {
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.mensajeArchivo = `Archivo preparado: ${event.target.files[i].name}`;
        this.nombreArchivo = event.target.files[i].name;
        this.datosFormulario.delete('archivo');
        this.datosFormulario.append('archivo', event.target.files[i], event.target.files[i].name);
        
        this.detalleImagen.emit(this.datosFormulario.get('archivo'));
      }
    } else {
      this.mensajeArchivo = 'No hay un archivo seleccionado';
    }

  }

  //Sube el archivo a Cloud Storage
  // public subirArchivo() {
  //   console.log("LLEGA ACA");
  //   let archivo = this.datosFormulario.get('archivo');
  //   var referencia;
  //   this.firebaseStorage.subirArchivo(this.nombreArchivo, archivo).then( resp => {

  //   referencia = this.firebaseStorage.linkArchivoPublic(this.nombreArchivo);

  //   referencia.getDownloadURL().subscribe((URL) => {
  //     console.log("link publico" + URL);
  //     this.URLPublica = URL;
  //   });

  //   })

  // }


// public enviarImagen(){
//   this.detalleImagen.emit(this.datosFormulario.get('archivo'));
// }


  preview(files) {
    if (files.length === 0)
      return;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      //this.message = "Only images are supported.";
      return;
    }
    
    
    var reader = new FileReader();
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }



}

