import { Component, OnInit} from '@angular/core';
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
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {

  esProfesional = false;
  adminActivo = false;
  tipoDeUsuario: string = "Paciente";

  public listaEspecialidades: Especialidad[] = [];
  public listaDias: string[] = [];
  public estado=false;
  public listado = [];
  public URLPublicaUno;
  public URLPublicaDos;
  public imagenUno;
  public imagenDos;
  public usuario;
  public registrando = false;
  public registrado = false;
  public usuarioActivo;

  public formRegistro: FormGroup;

  public myRecaptcha:boolean=false;

  onScriptLoad(){
    console.log("Load captcha");
  }

  onScriptError(){
    console.log("Error captcha");
  }

  constructor(private authService: AuthentificationService, private firebaseStorage: FirebaseStorageService, private userService: UsuariosService) {

    this.formRegistro = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required),
      nacimiento: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.email),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      recaptchaReactive: new FormControl(null,Validators.requiredTrue)
    })

  }


  resolved(captchaResponse: string, res) {
    console.log(`Resolved response token: ${captchaResponse}`);
  }


  confirmarRegistro() {

    if (this.imagenUno != null && this.imagenDos != null && this.listaEspecialidades) {
      this.registrando = true;

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

      //metadata de imagenes

      let usuarioMeta={nombre:this.formRegistro.value.nombre,apellido:this.formRegistro.value.apellido,email:this.formRegistro.value.email};



      this.firebaseStorage.subirArchivo(this.formRegistro.value.email + "_1", this.imagenUno,usuarioMeta).then(resp => {
        referenciaUno = this.firebaseStorage.linkArchivoPublic(this.formRegistro.value.email + "_1");
        referenciaUno.getDownloadURL().subscribe((URL) => {
          console.log("link publico " + URL);
          this.URLPublicaUno = URL;
        });

        this.firebaseStorage.subirArchivo(this.formRegistro.value.email + "_2", this.imagenDos,usuarioMeta).then(resp => {
          referenciaDos = this.firebaseStorage.linkArchivoPublic(this.formRegistro.value.email + "_2");
          referenciaDos.getDownloadURL().subscribe((URL) => {
            console.log("link publico 2 " + URL);
            this.URLPublicaDos = URL;


            // SUBIR USUARIOS

            if (this.tipoDeUsuario == "Profesional") {
              this.usuario = new Usuario(this.formRegistro.value.nombre, this.formRegistro.value.apellido, this.formRegistro.value.nacimiento, this.formRegistro.value.email, this.formRegistro.value.password, this.URLPublicaUno, this.URLPublicaDos, this.tipoDeUsuario, this.listaEspecialidades,this.estado,this.listaDias);
            } else {
              this.usuario = new Usuario(this.formRegistro.value.nombre, this.formRegistro.value.apellido, this.formRegistro.value.nacimiento, this.formRegistro.value.email, this.formRegistro.value.password, this.URLPublicaUno, this.URLPublicaDos, this.tipoDeUsuario);
            }
            this.userService.altaUsuario(this.usuario).subscribe((resp: any) => {
              console.log("Registro LISTO");
              console.log(this.tipoDeUsuario);

              this.registrando = false;
              this.registrado = true;



              // if(this.tipoDeUsuario=="Profesional"){
              //   console.log("Guardando por especialidad");
              //   let idUsuario=resp.name;
              //   let usuarioPorEspecialidad;
              //   usuarioPorEspecialidad = new Usuario()
              // }


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

  recibirDias(e) {
    if (this.listaDias.indexOf(e) > -1)
      this.listaDias.splice(this.listaDias.indexOf(e), 1);
    else
      this.listaDias.push(e);
  }

  recibirParaAgregar(e) {
    if(this.listaEspecialidades.indexOf(e)>-1)
    this.listaEspecialidades.splice(this.listaEspecialidades.indexOf(e),1);
    else
    this.listaEspecialidades.push(e);


    // let especialidadToAdd = new Especialidad(e.descripcion, e.id);
    // let listaAux = this.listaEspecialidades;
    // let flag = 0;
    // for (let index = 0; index < this.listaEspecialidades.length; index++) {
    //   const element = this.listaEspecialidades[index];
    //   if (element.id == especialidadToAdd.id) {
    //     listaAux.splice(index, 1);
    //     flag = 1;
    //     break;
    //   }
    // }
    // if (flag != 1)
    //   listaAux.push(especialidadToAdd);
    // this.listaEspecialidades = listaAux;
    //  console.log(this.listaEspecialidades);

  }



  imagenASubirUno(img) {
    this.imagenUno = img;
  }

  imagenASubirDos(img) {
    this.imagenDos = img;
  }





  ngOnInit(): void {
    this.tipoDeUsuario = "Paciente";

    this.authService.currentUser().then(resp => {

      this.usuarioActivo = resp;

      this.userService.getUsuarioByEmail(this.usuarioActivo.email).subscribe(res => {
        if (res.tipoDeUsuario == "Administrador")
          this.adminActivo = true;

      });
    });

  }

}
