import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-listado-profesional',
  templateUrl: './listado-profesional.component.html',
  styleUrls: ['./listado-profesional.component.css']
})
export class ListadoProfesionalComponent implements OnInit {

  listado;
  especialidadProfesional;
  modificado=false;

  constructor(private userServ:UsuariosService) { }

  ngOnInit(): void {

    this.cargarUsuarios();

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
