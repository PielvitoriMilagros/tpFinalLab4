import { Component, OnInit } from '@angular/core';
import { EspecialidadesService } from 'src/app/servicios/especialidades.service';
import { Especialidad } from 'src/app/clases/especialidad';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public listaEspecialidades =[];
  public listado =[];


  constructor() {

   }




  esProfesional = false;
  tipoDeUsuario: string;


  tipoUsuario(tipo: string) {
    if (tipo == "Profesional")
      this.esProfesional = true;
    else
      this.esProfesional = false;
    this.tipoDeUsuario = tipo;


  }

  recibirParaAgregar(e){

  }



  ngOnInit(): void {
    this.tipoDeUsuario = "Paciente";
  }

}
