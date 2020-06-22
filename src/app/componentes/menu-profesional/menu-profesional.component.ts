import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-profesional',
  templateUrl: './menu-profesional.component.html',
  styleUrls: ['./menu-profesional.component.css']
})
export class MenuProfesionalComponent implements OnInit {

  @Input() usuarioActual : Usuario;


  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }

  verTurnos() {
    this.router.navigate(['Listados/Turnos']);
  }

  buscarTurnos() {
    this.router.navigate(['Busqueda/Turnos']);
  }

}
