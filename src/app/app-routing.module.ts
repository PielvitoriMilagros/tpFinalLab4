import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'Registro',component:RegistroComponent},
  {path:'Login',component:LoginComponent},
  {path:'',component:HomeComponent},
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
