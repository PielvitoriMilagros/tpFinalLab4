import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Turno } from 'src/app/clases/turno';

@Component({
  selector: 'app-listado-turno-profesional',
  templateUrl: './listado-turno-profesional.component.html',
  styleUrls: ['./listado-turno-profesional.component.css']
})
export class ListadoTurnoProfesionalComponent implements OnInit {

  @Input() listadoTurnos;
  // @Output() turnoCancelado : EventEmitter<Turno> = new EventEmitter<Turno>();
  // @Output() comentarioProfesional : EventEmitter<Turno> = new EventEmitter<Turno>();


  constructor() { }

  ngOnInit(): void {
  }

}
