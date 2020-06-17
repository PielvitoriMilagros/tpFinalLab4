import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Especialidad } from 'src/app/clases/especialidad';
import { Usuario } from 'src/app/clases/usuario';
import { EspecialidadesService } from 'src/app/servicios/especialidades.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { AuthentificationService } from 'src/app/servicios/authentification.service';

@Component({
  selector: 'app-turnos-solicitud',
  templateUrl: './turnos-solicitud.component.html',
  styleUrls: ['./turnos-solicitud.component.css']
})
export class TurnosSolicitudComponent implements OnInit {

  public formTurno = FormGroup;

  public especialidad;
  public dia;
  public profesional;

  public especialidadSelected;
  public diaSelected;
  public profesionalSelected;

  public listaEspecialidades: Especialidad[] = [];
  public listaDias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  public listaProfesionales: Usuario[] = [];

  public turno = [];
  public turnoEmitido = false;
  public encontroTurno = null;
  public listProfByEsp: Usuario[] = [];

  public profesionalElegido;
  public paciente;


  cambiaDia(item) {
    this.listProfByEsp = [];
    this.encontroTurno = null;
    this.diaSelected = item.target.value;
  }

  cambiaEspecialidad(item) {
    this.listProfByEsp = [];
    this.encontroTurno = null;
    let indice = item.target.selectedIndex;
    this.especialidadSelected = this.listaEspecialidades[indice];
  }

  cambiaProfesionales(item) {
    this.listProfByEsp = [];
    this.encontroTurno = null;
    let indice = item.target.selectedIndex;
    this.profesionalSelected = this.listaProfesionales[indice];
  }

  constructor(private especialiServ: EspecialidadesService, private userServ: UsuariosService, private auth: AuthentificationService) {

    especialiServ.getEspecialidades().subscribe(resp => {
      this.listaEspecialidades = resp;
    });

    userServ.getUsuarios().subscribe(resp => {
      let listaUsuarios = resp;
      this.listaProfesionales = listaUsuarios.filter(elem => elem.tipoDeUsuario == 'Profesional');
      this.listaProfesionales = listaUsuarios.filter(elem => elem.estado == true);
    });


    auth.currentUser().then(resp => {

      let aux = resp;

      this.userServ.getUsuarioByEmail(aux.email).subscribe(res => {
        this.paciente = res;

      });

    });

  }

  ngOnInit(): void {
  }

  activar(filtro: string) {
    switch (filtro) {
      case 'Especialidad': {
        this.especialidad = true;
        this.dia = false;
        this.profesional = false;
        break;
      }
      case 'Dia': {
        this.especialidad = false;
        this.dia = true;
        this.profesional = false;
        break;
      }
      case 'Profesional': {
        this.especialidad = false;
        this.dia = false;
        this.profesional = true;
        break;
      }

    }
  }

  realizarFiltro() {
    if (this.especialidad) {
      let opcion = this.especialidadSelected;
      // let listProfByEsp: Usuario[] = [];
      let turnoAgregar;
      let hayProfesional = false;
      let hayTurno = false;
      this.listaProfesionales.forEach(elementoProf => {
        elementoProf.especialidades.forEach(elementoEspe => {

          if (elementoEspe.id == opcion.id) {
            this.listProfByEsp.push(elementoProf);
            hayProfesional = true;
            hayTurno = true;
          }
        });

      });
      if (hayTurno)
        this.encontroTurno = true;
      else
        this.encontroTurno = false;


    } else if (this.dia) {
      let opcion = this.diaSelected;
      let hayProfesional = false;
      let hayTurno = false;
      this.listaProfesionales.forEach(elementoProf => {
        elementoProf.dias.forEach(elementoDia => {

          if (elementoDia == opcion) {
            this.listProfByEsp.push(elementoProf);
            hayProfesional = true;
            hayTurno = true;
          }
        });

      });
      if (hayTurno)
        this.encontroTurno = true;
      else
        this.encontroTurno = false;

    } else if (this.profesional) {
      this.listProfByEsp.push(this.profesionalSelected);
      this.encontroTurno=true;

    }
  }


  recibirProfesional(e) {
    this.profesionalElegido = e;
  }

  recibirTurno(e) {
    this.turnoEmitido = true;
  }





}
