import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { QuienesSomosComponent } from './componentes/quienes-somos/quienes-somos.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { RegistroPacienteComponent } from './componentes/registro-paciente/registro-paciente.component';
import { RegistroProfesionalComponent } from './componentes/registro-profesional/registro-profesional.component';
import { RegistroAdministradorComponent } from './componentes/registro-administrador/registro-administrador.component';
import { LoginComponent } from './componentes/login/login.component';
import { EspecialidadesTablaComponent } from './componentes/especialidades-tabla/especialidades-tabla.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CabeceraComponent,
    NavbarComponent,
    QuienesSomosComponent,
    RegistroComponent,
    RegistroPacienteComponent,
    RegistroProfesionalComponent,
    RegistroAdministradorComponent,
    LoginComponent,
    EspecialidadesTablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
