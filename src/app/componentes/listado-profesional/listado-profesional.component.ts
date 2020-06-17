import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { AuthentificationService } from 'src/app/servicios/authentification.service';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-listado-profesional',
  templateUrl: './listado-profesional.component.html',
  styleUrls: ['./listado-profesional.component.css']
})
export class ListadoProfesionalComponent implements OnInit {

  listado;
  especialidadProfesional;
  modificado=false;
  usuarioActualAdmin=false;

  constructor(private userServ:UsuariosService,private authService:AuthentificationService) { }

  ngOnInit(): void {

    this.cargarUsuarios();

    this.authService.currentUser().then(resp=>{

      let aux = resp;

       this.userServ.getUsuarioByEmail(aux.email).subscribe(res =>{
         
         let usuario=res;

         if(usuario.tipoDeUsuario == 'Administrador')
         this.usuarioActualAdmin=true;


       })

    });



  }


  cargarUsuarios(){
    this.userServ.getUsuarioByTipo("Profesional").subscribe(resp=>{

      this.listado=resp;

    });
  }

  activarProfesional(profesional){
    let estad=true;
    this.userServ.cambiarEstadoProfesional(profesional.id,estad);
    this.cargarUsuarios();
    this.modificado=true;

  }

  desactivarProfesional(profesional){
    let estad=false;
    this.userServ.cambiarEstadoProfesional(profesional.id,estad);
    this.cargarUsuarios();
    this.modificado=true;

  }



}
