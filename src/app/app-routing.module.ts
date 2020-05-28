import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroAdministradorComponent } from './componentes/registro-administrador/registro-administrador.component';
import { RegistroPacienteComponent } from './componentes/registro-paciente/registro-paciente.component';
import { RegistroProfesionalComponent } from './componentes/registro-profesional/registro-profesional.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'Registro',component:RegistroComponent},
  {path:'Login',component:LoginComponent},
  {path:'Registro/Paciente',component:RegistroPacienteComponent},
  {path:'',component:HomeComponent},
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
