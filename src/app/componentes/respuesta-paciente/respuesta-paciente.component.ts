import { Component, OnInit, Input } from '@angular/core';
import { TurnosService } from 'src/app/servicios/turnos.service';

@Component({
  selector: 'app-respuesta-paciente',
  templateUrl: './respuesta-paciente.component.html',
  styleUrls: ['./respuesta-paciente.component.css']
})
export class RespuestaPacienteComponent implements OnInit {

  @Input() turno;
  comentPaciente;
  responde=false;

  respuesta=[{campo:"La consulta ¿cumplió sus expectativas?",valor:""},{campo:"¿Cómo valora la capacidad del profesionales?",valor:""},{campo:"¿Le pareció correcto el tiempo de espera?",valor:""},{campo:"¿Recomendaría el profesional?",valor:""}];

  constructor(private turnoServ:TurnosService) { }

  ngOnInit(): void {
  }

  responder(item){
    this.responde=true;
  }

  guardar(){
    // this.turno.comentPaciente=this.comentPaciente;
    this.turno.comentPaciente=this.respuesta;
    this.turnoServ.updateTurno(this.turno.id,this.turno);

    this.responde=false;
  }



}
