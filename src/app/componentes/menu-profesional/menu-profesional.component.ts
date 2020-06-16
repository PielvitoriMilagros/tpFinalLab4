import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-menu-profesional',
  templateUrl: './menu-profesional.component.html',
  styleUrls: ['./menu-profesional.component.css']
})
export class MenuProfesionalComponent implements OnInit {

  @Input() usuarioActual : Usuario;


  constructor() { }

  ngOnInit(): void {
    
  }

}
