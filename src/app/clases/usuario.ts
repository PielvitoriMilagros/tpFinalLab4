import { Especialidad } from './especialidad';

export class Usuario {

    id:string;
	nombre:string;
    apellido:string;
    nacimiento:Date;
	email:string;
	password:string;
	imagenUno:string;
	imagenDos:string;
	tipoDeUsuario:string;
	especialidades:Especialidad[];
    estado:boolean;
    

    constructor(nombre:string,apellido:string,nacimiento:Date,email:string,password:string,imagenUno:string,imagenDos:string,tipoDeUsuario:string,especialidades?:Especialidad[],estado?:boolean,id?:string){
        this.id=id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.nacimiento = nacimiento;
        this.email=email;
        this.password=password;
        this.imagenUno=imagenUno;
        this.imagenDos=imagenDos;
        this.tipoDeUsuario = tipoDeUsuario;
        this.especialidades = especialidades;
        this.estado = estado;

    }



}
