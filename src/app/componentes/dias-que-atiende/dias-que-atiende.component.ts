import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dias-que-atiende',
  templateUrl: './dias-que-atiende.component.html',
  styleUrls: ['./dias-que-atiende.component.css']
})
export class DiasQueAtiendeComponent implements OnInit {

  constructor() { }

  @Output() diaParaAgregar : EventEmitter<string> = new EventEmitter<string>();

  listaDias:string[]=[];

  ngOnInit(): void {
  }

  dia(diaNuevo:string){
    this.diaParaAgregar.emit(diaNuevo);
    // this.listaDias.push(diaNuevo);
  }

}
