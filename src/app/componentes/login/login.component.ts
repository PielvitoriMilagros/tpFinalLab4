import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthentificationService } from 'src/app/servicios/authentification.service';
import { environment } from 'src/environments/environment';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { LogService } from 'src/app/servicios/log.service';

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

  userLogin;


  clase="progress-bar progress-bar-info progress-bar-striped ";

  constructor(private route: ActivatedRoute,private router: Router,private authService: AuthentificationService,private userServ:UsuariosService,private logServ:LogService) {
      this.progreso=0;
      this.ProgresoDeAncho="0%";

  }

  confirmarLogin(){

    this.logueando=true;
    this.authService.iniciarSesion(this.usuario, this.clave).then(resp => {

      this.authService.currentUser().then(resp=>{
        // console.log(resp);
      

      this.userServ.getUsuarioByEmail(this.usuario).subscribe(res =>{
        this.userLogin=res;

        if(this.userLogin.tipoDeUsuario=='Profesional'){
          let diaInfo = new Date();
          let mes = diaInfo.getMonth();
          mes = mes +1;
          let diaA = diaInfo.getDate() + '/' + mes + '/' + diaInfo.getFullYear();
          let horaA = diaInfo.getHours() + ':' + diaInfo.getMinutes();
          let log={profesional:this.userLogin,dia:diaA,hora:horaA};

          this.logServ.altaLog(log).subscribe((logProf: any) => {
            
            console.log("Registro LISTO");

          });

        }


      })

    });

      this.router.navigate(['/home']);

    }).catch(error =>{
      this.loginListo=false;
      this.errorLogin=true;
    });


  }


  cargarUser(tipo){
    switch(tipo){
      case 'User1':{
        this.usuario='juli_molinari_94@hotmail.com';
        this.clave='mica123';
        break;
      }
      case 'User2':{
        this.usuario='violebu1@gmail.com';
        this.clave='viole123';
        break;
      }
      case 'Prof1':{
        this.usuario='miledupi@hotmail.com';
        this.clave='qweqwe';
        break;
      }
      case 'Prof2':{
        this.usuario='milagrosp619@gmail.com';
        this.clave='pass123';
        break;
      }
      case 'Prof3':{
        this.usuario='teconleche666@gmail.com';
        this.clave='fran123';
        break;
      }
      case 'Admin1':{
        this.usuario='julietamolinari85@gmail.com';
        this.clave='asdasd';
        break;
      }
    }
  }



  ngOnInit() {
  }

}



