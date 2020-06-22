import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu-administrador',
  templateUrl: './menu-administrador.component.html',
  styleUrls: ['./menu-administrador.component.css']
})
export class MenuAdministradorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  verProfesionales()
  {
    this.router.navigate(['/Listados/Profesionales']);
  }

  registrarAdmin(){
    this.router.navigate(['/Registro']);
  }
  
  aInformes(){
    this.router.navigate(['/Informes']);
  }


}
