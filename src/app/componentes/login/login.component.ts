import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  private subscription: Subscription;
  usuario = '';
  clave= '';
  errorLogin=false;
  progreso: number;
  progresoMensaje="esperando..."; 
  logeando=true;
  ProgresoDeAncho:string;

  clase="progress-bar progress-bar-info progress-bar-striped ";

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
      this.progreso=0;
      this.ProgresoDeAncho="0%";

  }

  ngOnInit() {
  }

  Entrar() {
    // let jugadores = this.miServicio.obtenerJugadores();
    // let flag=false;
    let flag=true;

    // for(let jugador of jugadores){
    //   if(this.usuario == jugador.usuario && this.clave==jugador.clave){
    //     flag=true;
    //     this.miServicio.activarJugador(jugador);
    //     this.router.navigate(['/Principal']);
    //   }
    // }
    if(flag)
    this.errorLogin=false;
    else
    this.errorLogin=true;
    // if (this.usuario === 'admin' && this.clave === 'admin') {
    //   this.router.navigate(['/Principal']);
    // }
  }



  MoverBarraDeProgreso() {
    
    this.logeando=false;
    this.clase="progress-bar progress-bar-danger progress-bar-striped active";

          this.subscription.unsubscribe();
          this.Entrar();
    //this.logeando=true;
  }

}
