import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EspecialidadesService } from 'src/app/servicios/especialidades.service';
import { Especialidad } from 'src/app/clases/especialidad';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-especialidades-tabla',
  templateUrl: './especialidades-tabla.component.html',
  styleUrls: ['./especialidades-tabla.component.css']
})
export class EspecialidadesTablaComponent implements OnInit {

   public listaEspecialidades: Especialidad[]=[];
  // public listaEspecialidades =[];
  @Output() especialidadAgregar : EventEmitter<Especialidad> = new EventEmitter<Especialidad>();

  public formEspecialidad:FormGroup;
  public nuevaEspecialidad;



  constructor(private miServicio:EspecialidadesService) {

    miServicio.getEspecialidades().subscribe( resp =>{

      this.listaEspecialidades=resp;
//ver por qué no entra la segunda vez que apreto profesional
           console.log(this.listaEspecialidades);
      
    });



    this.formEspecialidad = new FormGroup({
      especialidadNueva : new FormControl(null,Validators.required)
    })

   }


  ngOnInit(): void {
  }


  agregarEspecialidad(especiali){
    this.especialidadAgregar.emit(especiali);
  }

  crearNuevaEspecialidad(){
    this.nuevaEspecialidad = new Especialidad(this.formEspecialidad.value.especialidadNueva);
    this.nuevaEspecialidad = this.miServicio.altaEspecialidad(this.nuevaEspecialidad).subscribe(resp =>{
      console.log("se agrego la nueva especialidad " + this.formEspecialidad.value.especialidadNueva);
      this.listaEspecialidades.push(this.nuevaEspecialidad);
    })
  }




}
