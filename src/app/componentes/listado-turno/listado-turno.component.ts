import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/servicios/authentification.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { TurnosService } from 'src/app/servicios/turnos.service';
import { Turno } from 'src/app/clases/turno';

@Component({
  selector: 'app-listado-turno',
  templateUrl: './listado-turno.component.html',
  styleUrls: ['./listado-turno.component.css']
})
export class ListadoTurnoComponent implements OnInit {

  usuario;
  esProfesional=false;
  esPaciente=false;
  esAdmin=false;
  turnos:Turno[]=[];

  constructor(private auth:AuthentificationService, private userServ:UsuariosService, private turnoServ:TurnosService) { }

  ngOnInit(): void {
    this.auth.currentUser().then(resp=>{

      let aux = resp;

       this.userServ.getUsuarioByEmail(aux.email).subscribe(res =>{
         this.usuario=res;
         switch(this.usuario.tipoDeUsuario){
          case 'Profesional':{
            this.esProfesional=true;
            this.turnoServ.getTurnosByProfesional(aux.email).subscribe(turn =>{
              this.turnos=turn;
            });
            break;
          }
          case 'Paciente':{
            this.esPaciente=true;
            this.turnoServ.getTurnosByPaciente(aux.email).subscribe(turn =>{
              this.turnos=turn;
            });
            break;
          }
          case 'Administrador':{
            this.esAdmin=true;
            break;
          }
        }
        
        




       });
      });

  }


  cancelarTurnoRecibido(e){
    this.turnoServ.cambiarEstadoTurno(e.id,"CANCELADO");
  }




}
