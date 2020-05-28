import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EspecialidadesService } from 'src/app/servicios/especialidades.service';
import { Especialidad } from 'src/app/clases/especialidad';


@Component({
  selector: 'app-especialidades-tabla',
  templateUrl: './especialidades-tabla.component.html',
  styleUrls: ['./especialidades-tabla.component.css']
})
export class EspecialidadesTablaComponent implements OnInit {

  // public listaEspecialidades: Especialidad[]=[];
  public listaEspecialidades =[];
  @Output() especialidadAgregar : EventEmitter<Especialidad> = new EventEmitter<Especialidad>();



  constructor(private miServicio:EspecialidadesService) {

    this.miServicio.getEspecialidades().subscribe( (especialidadesSnapshot:any)=>{
      console.log(especialidadesSnapshot);
      especialidadesSnapshot.forEach(element => {
        // const aux= new Especialidad(element.payload.doc.id,element.payload.doc.data());
        // this.listaEspecialidades.push(aux);
        this.listaEspecialidades.push({
          id: element.payload.doc.id,
          data: element.payload.doc.data()
        });
      });
    }, errores=>{
      console.log(errores);
    } );

    console.log(this.listaEspecialidades);
   }


  ngOnInit(): void {
  }


  agregarEspecialidad(especiali){
    this.especialidadAgregar.emit(especiali);
  }




}
