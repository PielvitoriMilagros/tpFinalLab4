import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
//
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
    SubirImagenComponent
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
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
