import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseStorageService } from 'src/app/servicios/firebase-storage.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { environment } from 'src/environments/environment';
import { AuthentificationService } from '../../servicios/authentification.service';
import { Usuario } from 'src/app/clases/usuario';
import { Especialidad } from 'src/app/clases/especialidad';
import { auth } from 'firebase';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  esProfesional = false;
  tipoDeUsuario: string="Paciente";

  public listaEspecialidades:Especialidad[]=[];
  public listado = [];
  public URLPublicaUno;
  public URLPublicaDos;
  public imagenUno;
  public imagenDos;
  public usuario;
  public registrando=false;
  public registrado=false;

  public formRegistro: FormGroup;

  constructor(private authService: AuthentificationService, private firebaseStorage: FirebaseStorageService, private userService: UsuariosService) {

    this.formRegistro = new FormGroup({
      nombre: new FormControl(null,Validators.required),
      apellido: new FormControl(null,Validators.required),
      nacimiento: new FormControl(null,Validators.required),
      email: new FormControl(null, Validators.email),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })

  }


  confirmarRegistro() {

    if(this.imagenUno != null && this.imagenDos != null && this.listaEspecialidades){
      this.registrando=true;
      
    // this.authService.registrarCuenta(this.formRegistro.get("email"),this.formRegistro.get("password"));
    this.authService.registrarCuenta(this.formRegistro.value.email, this.formRegistro.value.password).then(resp => {
      console.log(resp);
      resp.user.sendEmailVerification({
        handleCodeInApp: true,
        url: environment.urlVerify
      })
    });

    //subir imagenes
    var referenciaUno;
    var referenciaDos;
    

    
    this.firebaseStorage.subirArchivo(this.formRegistro.value.email + "_1", this.imagenUno).then(resp => {
      referenciaUno = this.firebaseStorage.linkArchivoPublic(this.formRegistro.value.email + "_1");
      referenciaUno.getDownloadURL().subscribe((URL) => {
        console.log("link publico " + URL);
        this.URLPublicaUno = URL;
      });

      this.firebaseStorage.subirArchivo(this.formRegistro.value.email + "_2", this.imagenDos).then(resp => {
        referenciaDos = this.firebaseStorage.linkArchivoPublic(this.formRegistro.value.email + "_2");
        referenciaDos.getDownloadURL().subscribe((URL) => {
          console.log("link publico 2 " + URL);
          this.URLPublicaDos = URL;


          // subir usuarios
          
// FALTA VER BIEN ESTO
// FALTA FILTRAR CARGA DEL ADMINISTRADOR
 if(this.tipoDeUsuario=="Profesional"){
   this.usuario=new Usuario(this.formRegistro.value.nombre,this.formRegistro.value.apellido,this.formRegistro.value.nacimiento,this.formRegistro.value.email,this.formRegistro.value.password,this.URLPublicaUno,this.URLPublicaDos,this.tipoDeUsuario,this.listaEspecialidades,false);
 }else{
   this.usuario=new Usuario(this.formRegistro.value.nombre,this.formRegistro.value.apellido,this.formRegistro.value.nacimiento,this.formRegistro.value.email,this.formRegistro.value.password,this.URLPublicaUno,this.URLPublicaDos,this.tipoDeUsuario);
 }
          this.userService.altaUsuario(this.usuario).subscribe(resp => {
            console.log("Registro LISTO");

            this.registrando=false;
            this.registrado=true;

          });

        });
      });

    });
  }
}


  tipoUsuario(tipo: string) {
    if (tipo == "Profesional")
      this.esProfesional = true;
    else
      this.esProfesional = false;
    this.tipoDeUsuario = tipo;

  }


  recibirParaAgregar(e) {
    console.log(e);
    let especialidadToAdd = new Especialidad(e.descripcion,e.id);
    let listaAux = this.listaEspecialidades
    let flag=0;
    for (let index = 0; index < this.listaEspecialidades.length; index++) {
      const element = this.listaEspecialidades[index];
      if(element.id == especialidadToAdd.id){
        listaAux.splice(index,1);
        flag=1;
        break;
      }      
    }

    if(flag!=1)
      listaAux.push(especialidadToAdd);
    this.listaEspecialidades = listaAux;
console.log(this.listaEspecialidades);

  }



  imagenASubirUno(img) {
    this.imagenUno = img;
  }

  imagenASubirDos(img) {
    this.imagenDos = img;
  }





  ngOnInit(): void {
    this.tipoDeUsuario = "Paciente";
  }

}
