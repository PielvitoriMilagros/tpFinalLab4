import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-paciente',
  templateUrl: './menu-paciente.component.html',
  styleUrls: ['./menu-paciente.component.css']
})
export class MenuPacienteComponent implements OnInit {

  @Input() usuarioActual:Usuario;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  solicitarTurno(){
    this.router.navigate(['/Turnos/Solicitud']);
  }

}
