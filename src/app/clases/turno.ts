import { Usuario } from './usuario';
import { Especialidad } from './especialidad';
import { EspecialidadesService } from '../servicios/especialidades.service';

export class Turno {
    id: string;
    paciente: Usuario;
    profesional: Usuario;
    dia: Date;
    horario: string;
    especialidad: Especialidad;
    estado: string;
    datosExtra;
    comentProfesional: string;
    comentPaciente;


    constructor(paciente: Usuario, profesional: Usuario, dia: Date, horario: string, especialidad: Especialidad, estado: string, datosExtra?, comentProfesional?: string, comentPaciente?, id?: string) {
        if (id) this.id = id;
        if (paciente) this.paciente = paciente;
        if (profesional) this.profesional = profesional;
        if (dia) this.dia = dia;
        if (horario) this.horario = horario;
        if (especialidad) this.especialidad = especialidad;
        if (estado) this.estado = estado;
        if (datosExtra) this.datosExtra = datosExtra;
        if (comentProfesional) this.comentProfesional = comentProfesional;
        if (comentPaciente) this.comentPaciente = comentPaciente;

    }

}
