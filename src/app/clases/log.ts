import { Usuario } from './usuario';

export class Log {

    profesional:Usuario;
    dia:string;
    hora:string;

    constructor(profesional:Usuario,dia:string,hora:string){
        this.profesional=profesional;
        this.dia = dia;
        this.hora = hora;
    }

}
