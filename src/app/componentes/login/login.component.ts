import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthentificationService } from 'src/app/servicios/authentification.service';
import { environment } from 'src/environments/environment';

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
  loginListo=true;
  progreso: number;
  progresoMensaje="esperando..."; 
  logueando=false;
  ProgresoDeAncho:string;

  public formLogin: FormGroup;

  clase="progress-bar progress-bar-info progress-bar-striped ";

  constructor(private route: ActivatedRoute,private router: Router,private authService: AuthentificationService) {
      this.progreso=0;
      this.ProgresoDeAncho="0%";

      this.formLogin = new FormGroup({
        email: new FormControl(null, Validators.email),
        password: new FormControl(null, [Validators.required, Validators.minLength(6)])
      })

  }

  confirmarLogin(){

    this.logueando=true;
    this.authService.iniciarSesion(this.formLogin.value.email, this.formLogin.value.password).then(resp => {

      this.authService.currentUser().then(resp=>{
        console.log(resp);
      })


      this.router.navigate(['/home']);

    }).catch(error =>{
      this.loginListo=false;
      this.errorLogin=true;
    });


  }



  ngOnInit() {
  }

}
