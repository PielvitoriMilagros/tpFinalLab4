import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/servicios/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuarioActivo;

  constructor(private router:Router,private authService:AuthentificationService) {
  }
  
  ngOnInit(): void {
    this.authService.currentUser().then(resp=>{
      this.usuarioActivo=resp;
  
    })
  }

  cerrarSesion(){
    this.authService.cerrarSesion().then( resp =>{
      this.usuarioActivo=null;
      this.router.navigate(['/home']);
    });
  }

}
