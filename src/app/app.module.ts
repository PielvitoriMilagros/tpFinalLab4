import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
//
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RecaptchaModule } from 'angular-google-recaptcha';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { QuienesSomosComponent } from './componentes/quienes-somos/quienes-somos.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { EspecialidadesTablaComponent } from './componentes/especialidades-tabla/especialidades-tabla.component';
import { HttpClientModule } from '@angular/common/http';
import { SubirImagenComponent } from './componentes/subir-imagen/subir-imagen.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { MenuProfesionalComponent } from './componentes/menu-profesional/menu-profesional.component';
import { MenuPacienteComponent } from './componentes/menu-paciente/menu-paciente.component';
import { MenuAdministradorComponent } from './componentes/menu-administrador/menu-administrador.component';
import { ListadoProfesionalComponent } from './componentes/listado-profesional/listado-profesional.component';
import { TurnosSolicitudComponent } from './componentes/turnos-solicitud/turnos-solicitud.component';
import { DiasQueAtiendeComponent } from './componentes/dias-que-atiende/dias-que-atiende.component';
import { TurnosTablaComponent } from './componentes/turnos-tabla/turnos-tabla.component';
import { TablaProfesionalComponent } from './componentes/tabla-profesional/tabla-profesional.component';
import { ListadoTurnoComponent } from './componentes/listado-turno/listado-turno.component';
import { ListadoTurnoPacienteComponent } from './componentes/listado-turno-paciente/listado-turno-paciente.component';
import { ListadoTurnoProfesionalComponent } from './componentes/listado-turno-profesional/listado-turno-profesional.component';
import { AtencionComponent } from './componentes/atencion/atencion.component';
import { RespuestaPacienteComponent } from './componentes/respuesta-paciente/respuesta-paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CabeceraComponent,
    NavbarComponent,
    QuienesSomosComponent,
    RegistroComponent,
    LoginComponent,
    EspecialidadesTablaComponent,
    SubirImagenComponent,
    PerfilComponent,
    MenuProfesionalComponent,
    MenuPacienteComponent,
    MenuAdministradorComponent,
    ListadoProfesionalComponent,
    TurnosSolicitudComponent,
    DiasQueAtiendeComponent,
    TurnosTablaComponent,
    TablaProfesionalComponent,
    ListadoTurnoComponent,
    ListadoTurnoPacienteComponent,
    ListadoTurnoProfesionalComponent,
    AtencionComponent,
    RespuestaPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    RecaptchaModule.forRoot({
      siteKey: '6Lc4WaUZAAAAAIIAlqD0ChmdMPFlaoMWT6UqvIQs',
  }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
