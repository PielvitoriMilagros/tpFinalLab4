import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { ListadoProfesionalComponent } from './componentes/listado-profesional/listado-profesional.component';
import { TurnosSolicitudComponent } from './componentes/turnos-solicitud/turnos-solicitud.component';
import { ListadoTurnoComponent } from './componentes/listado-turno/listado-turno.component';


const routes: Routes = [
  {path:'home',component:HomeComponent,data:{animation: 'home'}},
  {path:'Registro',component:RegistroComponent,data:{animation: 'Registro'}},
  {path:'Login',component:LoginComponent,data:{animation: 'Login'}},
  {path:'MiPerfil',component:PerfilComponent},
  {path:'Listados/Profesionales',component:ListadoProfesionalComponent},
  {path:'Listados/Turnos',component:ListadoTurnoComponent},
  {path:'Turnos/Solicitud',component:TurnosSolicitudComponent},
  {path:'**', pathMatch:'full' ,redirectTo:'home'},
  
  // {path: 'Registro' ,
  // component: RegistroComponent ,
  // children:
  //      [{path: '' , component: RegistroComponent},
  //       {path: 'Administrador' , component: RegistroAdministradorComponent},
  //       {path: 'Paciente' , component:RegistroPacienteComponent},
  //       {path: 'Profesional' , component: RegistroProfesionalComponent}]
  // }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
