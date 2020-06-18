import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Turno } from 'src/app/clases/turno';

@Component({
  selector: 'app-listado-turno-paciente',
  templateUrl: './listado-turno-paciente.component.html',
  styleUrls: ['./listado-turno-paciente.component.css']
})
export class ListadoTurnoPacienteComponent implements OnInit {

  @Input() listadoTurnos;
  @Output() turnoCancelado : EventEmitter<Turno> = new EventEmitter<Turno>();
  @Output() turnoConComentarioProf : EventEmitter<Turno> = new EventEmitter<Turno>();

  constructor() { }

  ngOnInit(): void {
  }

cancelarTurno(item){
  item.estado="CANCELADO";
  this.turnoCancelado.emit(item);
}


verComentario(item){
  this.turnoConComentarioProf.emit(item);
}

}
