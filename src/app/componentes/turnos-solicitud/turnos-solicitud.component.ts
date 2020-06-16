import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Especialidad } from 'src/app/clases/especialidad';
import { Usuario } from 'src/app/clases/usuario';
import { EspecialidadesService } from 'src/app/servicios/especialidades.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-turnos-solicitud',
  templateUrl: './turnos-solicitud.component.html',
  styleUrls: ['./turnos-solicitud.component.css']
})
export class TurnosSolicitudComponent implements OnInit {

  public formTurno=FormGroup;

  public especialidad;
  public dia;
  public profesional;

  public listaEspecialidades:Especialidad[]=[];
  public listaDias=['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
  public listaProfesionales:Usuario[]=[];


  cambiaDia(item){
    console.log(item.target.value);
  }

  cambiaEspecialidad(item){
    let objeto=item.target.value;
    // console.log(objeto.data);
  }

  cambioEsp(item){
    console.log(item);
  }


  constructor(private especialiServ:EspecialidadesService, private userServ:UsuariosService) {

    especialiServ.getEspecialidades().subscribe(resp => {
      this.listaEspecialidades=resp;
    });

    userServ.getUsuarios().subscribe(resp => {
      let listaUsuarios=resp;
      this.listaProfesionales=listaUsuarios.filter(elem => elem.tipoDeUsuario == 'Profesional');
    });


    

   }

  ngOnInit(): void {
  }

  activar(filtro:string){
    switch(filtro){
      case'Especialidad':{
        this.especialidad=true;
        this.dia=false;
        this.profesional=false;
        break;
      }
      case'Dia':{
        this.especialidad=false;
        this.dia=true;
        this.profesional=false;
        break;
      }
      case'Profesional':{
        this.especialidad=false;
        this.dia=false;
        this.profesional=true;
        break;
      }

    }
  }

}
