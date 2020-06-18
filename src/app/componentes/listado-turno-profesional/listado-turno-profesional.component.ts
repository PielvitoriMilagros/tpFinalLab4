import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Turno } from 'src/app/clases/turno';

@Component({
  selector: 'app-listado-turno-profesional',
  templateUrl: './listado-turno-profesional.component.html',
  styleUrls: ['./listado-turno-profesional.component.css']
})
export class ListadoTurnoProfesionalComponent implements OnInit {

  @Input() listadoTurnos;
  @Output() turnoRechazado : EventEmitter<Turno> = new EventEmitter<Turno>();
  @Output() turnoAtender : EventEmitter<Turno> = new EventEmitter<Turno>();
  @Output() detalleTurno : EventEmitter<Turno> = new EventEmitter<Turno>();


  constructor() { }

  ngOnInit(): void {
  }

  rechazarTurno(item){
    item.estado="RECHAZADO";
    this.turnoRechazado.emit(item);
  }

  atender(item){
    this.turnoAtender.emit(item);
  }

  verDetalle(item){
    this.detalleTurno.emit(item);
  }

}
