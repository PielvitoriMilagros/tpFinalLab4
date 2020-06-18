import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Turno } from 'src/app/clases/turno';
import { TurnosService } from 'src/app/servicios/turnos.service';

@Component({
  selector: 'app-atencion',
  templateUrl: './atencion.component.html',
  styleUrls: ['./atencion.component.css']
})
export class AtencionComponent implements OnInit {

  @Input() turnoParaAtender:Turno;
  datosInicio=[{campo:'edad',valor:''},{campo:'temperatura',valor:''},{campo:'presion',valor:''}];
  datos=this.datosInicio;
  comentProfesional;

  guardado=false;

  // @Output() datosExtra : EventEmitter<any> = new EventEmitter<any>();
  // @Output() comentario : EventEmitter<string> = new EventEmitter<string>();
  
  constructor(private turnoServ:TurnosService) { }

  ngOnInit(): void {
  }

  agregarCampo(){
    this.datos.push({campo:'',valor:''});
  }


  guardar(){

    this.turnoParaAtender.datosExtra=this.datos;
    this.turnoParaAtender.comentProfesional=this.comentProfesional;
    this.turnoParaAtender.estado="ATENDIDO";
    this.turnoServ.updateTurno(this.turnoParaAtender.id,this.turnoParaAtender);

    this.guardado=true;

  }

}
