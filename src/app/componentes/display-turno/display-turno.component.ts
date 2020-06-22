import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-turno',
  templateUrl: './display-turno.component.html',
  styleUrls: ['./display-turno.component.css']
})
export class DisplayTurnoComponent implements OnInit {

  @Input() profesional;
  @Input() paciente;
  @Input() encuesta;
  @Input() historia;

  constructor() { }

  ngOnInit(): void {
  }

}
