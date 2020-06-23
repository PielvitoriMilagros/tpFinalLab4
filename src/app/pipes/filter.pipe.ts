import { Pipe, PipeTransform } from '@angular/core';
import { Turno } from '../clases/turno';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Turno[] = [], args: string): unknown {

    // var resultado:Turno[]=[];
    if (args == null || args.length < 2)
      return null;
    var resultado: Turno[] = [];
    var agregado;
    var agregadoProf;
    var agregadoDato;

    value.forEach(element => {
      // let pacNacimiento = element.paciente.nacimiento.getDay +'/'+element.paciente.nacimiento.getMonth +'/'+element.paciente.nacimiento.getFullYear;
      // let profNacimiento = element.profesional.nacimiento.getDay +'/'+element.profesional.nacimiento.getMonth+'/'+element.profesional.nacimiento.getFullYear;
      // let dia = element.dia.getDay+'/'+element.dia.getMonth +'/'+element.dia.getFullYear;
      agregado = 0;
      agregadoProf = 0;
      agregadoDato = 0;

      if (element.paciente.apellido.toLowerCase().indexOf(args.toLowerCase()) > -1 ||
        element.paciente.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1 ||
        element.paciente.email.toLowerCase().indexOf(args.toLowerCase()) > -1 ||
        element.profesional.apellido.toLowerCase().indexOf(args.toLowerCase()) > -1 ||
        element.profesional.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1 ||
        element.profesional.email.toLowerCase().indexOf(args.toLowerCase()) > -1 ||
        // pacNacimiento.indexOf(args.toLowerCase()) > -1 ||
        // profNacimiento.indexOf(args.toLowerCase()) > -1 ||
        // dia.indexOf(args.toLowerCase()) > -1 ||
        element.horario.toLowerCase().indexOf(args.toLowerCase()) > -1 ||
        element.estado.toLowerCase().indexOf(args.toLowerCase()) > -1 ||
        element.especialidad.descripcion.toLowerCase().indexOf(args.toLowerCase()) > -1) {

        resultado.push(element);

      } else if (element.comentProfesional &&
        element.comentProfesional.toLowerCase().indexOf(args.toLowerCase()) > -1) {
        // if (element.comentProfesional.toLowerCase().indexOf(args.toLowerCase()) > -1) {
        resultado.push(element);
        agregadoProf = 1;
        // }
      } else if (element.comentPaciente) {
        if (agregadoProf == 0) {
          element.comentPaciente.forEach(pregunta => {
            if ((pregunta.campo.toLowerCase().indexOf(args.toLowerCase()) > -1 ||
              pregunta.valor.toLowerCase().indexOf(args.toLowerCase()) > -1) && agregado == 0) {
              resultado.push(element);
              agregado = 1;
            }
          });
        }

      }
      if (element.datosExtra && agregado == 0 && agregadoProf == 0) {
        element.datosExtra.forEach(dato => {
          if ((dato.campo.toLowerCase().indexOf(args.toLowerCase()) > -1 ||
            dato.valor.toLowerCase().indexOf(args.toLowerCase()) > -1) && agregadoDato == 0) {
            resultado.push(element);
            agregadoDato = 1;
          }
        });
      }

    });

    return resultado;
  }

}
