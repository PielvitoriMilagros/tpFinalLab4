import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthentificationService } from 'src/app/servicios/authentification.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario;
  imagenUno;
  imagenDos;
  estadoMail=null;

  esProfesional=false;
  esPaciente=false;
  esAdmin=false;


  constructor(private auth:AuthentificationService, private userServ:UsuariosService) { }

  ngOnInit(): void {

    this.auth.currentUser().then(resp=>{

      let aux = resp;

       this.userServ.getUsuarioByEmail(aux.email).subscribe(res =>{
         this.usuario=res;

         this.imagenUno=this.usuario.imagenUno;
         this.imagenDos=this.usuario.imagenDos;

         this.estadoMail=aux.emailVerified;

         switch(this.usuario.tipoDeUsuario){
           case 'Profesional':{
             this.esProfesional=true;
             break;
           }
           case 'Paciente':{
             this.esPaciente=true;
             break;
           }
           case 'Administrador':{
             this.esAdmin=true;
             break;
           }
         }

       })

    });


  }






}
