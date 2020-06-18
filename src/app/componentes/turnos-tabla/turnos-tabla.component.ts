import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Turno } from 'src/app/clases/turno';
import { Usuario } from 'src/app/clases/usuario';
import { EspecialidadesService } from 'src/app/servicios/especialidades.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { AuthentificationService } from 'src/app/servicios/authentification.service';
import { TurnosService } from 'src/app/servicios/turnos.service';

@Component({
  selector: 'app-turnos-tabla',
  templateUrl: './turnos-tabla.component.html',
  styleUrls: ['./turnos-tabla.component.css']
})
export class TurnosTablaComponent implements OnInit {


  @Input() profesionalRecibido: Usuario;
  @Input() pacienteRecibido: Usuario;

  @Output() turnoListo : EventEmitter<boolean> = new EventEmitter<boolean>();

  public especialidadSelected;
  public diaSelected;
  public horaSelected;


  horariosSemana = ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30'];
  horariosSabado = ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30'];
  horarios;
  errorDia = null;
  turnoNuevo;


  ngOnInit(): void { }

  constructor(private especialiServ: EspecialidadesService, private userServ: UsuariosService, private auth: AuthentificationService, private turnoServ: TurnosService) { }


  confirmarTurno() {

    this.turnoNuevo = new Turno(this.pacienteRecibido, this.profesionalRecibido, this.diaSelected, this.horaSelected, this.especialidadSelected, "PENDIENTE");
    this.turnoServ.altaTurno(this.turnoNuevo).subscribe((resp: any) => {
      this.turnoListo.emit(true);
    });

  }


  selectEspecialidad(item) {
    let indice = item.target.selectedIndex;
    this.especialidadSelected = this.profesionalRecibido.especialidades[indice];
  }



  selectHora(item) {
    let indice = item.target.selectedIndex;
    this.horaSelected = this.horarios[indice];
  }



  selectDia(item) {
    let dia = new Date(this.diaSelected);
    let semana = dia.getDay();

    this.validaDiaHorario(semana);
  }

  validaDiaHorario(semana) {
    let diasAtencion = this.armaDiasAtencion();

    if (diasAtencion.indexOf(semana) > -1) {

      if (semana == 5) {
        this.horarios = this.horariosSabado;
        this.errorDia = false;
      }
      else {
        this.horarios = this.horariosSemana;
        this.errorDia = false;
      }
    } else {
      this.errorDia = true;
    }
  }


  armaDiasAtencion() {
    let diasAtencionProf: number[] = [];
    this.profesionalRecibido.dias.forEach(element => {
      switch (element) {
        case 'Lunes': {
          diasAtencionProf.push(0);
          break;
        }
        case 'Martes': {
          diasAtencionProf.push(1);
          break;
        }
        case 'Miercoles': {
          diasAtencionProf.push(2);
          break;
        }
        case 'Jueves': {
          diasAtencionProf.push(3);
          break;
        }
        case 'Viernes': {
          diasAtencionProf.push(4);
          break;
        }
        case 'Sabado': {
          diasAtencionProf.push(5);
          break;
        }
      }
    });
    return diasAtencionProf;
  }









}
