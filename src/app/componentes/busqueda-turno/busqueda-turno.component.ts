import { Component, OnInit } from '@angular/core';
import { TurnosService } from 'src/app/servicios/turnos.service';

@Component({
  selector: 'app-busqueda-turno',
  templateUrl: './busqueda-turno.component.html',
  styleUrls: ['./busqueda-turno.component.css']
})
export class BusquedaTurnoComponent implements OnInit {

  constructor(private turnoServ:TurnosService) { }

  listadoTurnos;
  filterTurno="";
  profesional=null;
  paciente=null;
  historia=null;
  encuesta=null;

  verProfesional;
  verPaciente;
  verHistoria;
  verEncuesta;

  ngOnInit(): void {

    this.turnoServ.getTurnos().subscribe( resp =>{

      this.listadoTurnos=resp;

    });

    this.profesional=null;
    this.paciente=null;
    this.historia=null;
    this.encuesta=null;

    this.verProfesional=false;
    this.verPaciente=false;
    this.verHistoria=false;
    this.verEncuesta=false;

  }

  verDetalle(filtro,turno){
    switch(filtro){
      case 'profesional':
        this.profesional=turno.profesional;
        this.paciente=null;
        this.historia=null;
        this.encuesta=null;
        this.verProfesional=true;
        break;
      case 'paciente':
        this.paciente=turno.paciente;
        this.profesional=null;
        this.historia=null;
        this.encuesta=null;
        this.verPaciente=true;
        break;
        case 'historia':
          this.historia=turno.datosExtra;
          this.paciente=null;
          this.profesional=null;
          this.encuesta=null;
          this.verHistoria=true;
          break;
      case 'encuesta':
        this.encuesta=turno.comentPaciente;
        this.paciente=null;
        this.historia=null;
        this.profesional=null;
        this.verEncuesta=true;
        break;

    }
  }

  




















  // activar(tipo){
  //   switch(tipo){
  //     case 'profesional':{

  //     }
  //     case 'paciente':{

  //     }
  //     case 'dia':{

  //     }
  //     case 'horario':{

  //     }
  //     case 'especialidad':{

  //     }
  //     case 'estado':{

  //     }
  //     case 'datosExtra':{

  //     }
  //     case 'comentProfesional':{

  //     }
  //     case 'comentPaciente':{

  //     }
  //   }
  // }

}
