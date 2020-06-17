import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { AuthentificationService } from 'src/app/servicios/authentification.service';
import { Especialidad } from 'src/app/clases/especialidad';
import { EspecialidadesService } from 'src/app/servicios/especialidades.service';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-tabla-profesional',
  templateUrl: './tabla-profesional.component.html',
  styleUrls: ['./tabla-profesional.component.css']
})
export class TablaProfesionalComponent implements OnInit {

  constructor(private userServ:UsuariosService,private authService:AuthentificationService,private especialiServ: EspecialidadesService) { }

  

  @Input() listadoRecibido;
  @Output() profesionalParaTurno : EventEmitter<Usuario> = new EventEmitter<Usuario>();

  public listaEspecialidadesProfesional:Especialidad[]=[];

  ngOnInit(): void {


  }

  solicitarTurno(profesional){
    this.profesionalParaTurno.emit(profesional);

  }


}
