import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaLibrosComponent } from './Components/lista-libros/lista-libros.component';
import { LoginComponent } from './Components/login/login.component';
import { ModificarLibroComponent } from './Components/modificar-libro/modificar-libro.component';
import { NuevoLibrosComponent } from './Components/nuevo-libros/nuevo-libros.component';
import { MenuComponent } from './Components/menu/menu.component';

//Modulos Angular
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

const appRoutes : Routes = [
 {path:'', redirectTo: 'lista', pathMatch: 'full'},
 {path:'lista', component: ListaLibrosComponent},
 {path:'login', component: LoginComponent},
 {path: 'nuevo',component:NuevoLibrosComponent},
 {path:'editar', component:ModificarLibroComponent},
 {path:'menu', component:MenuComponent},
 {path: '**', redirectTo: 'lista', pathMatch: 'full'}


];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaLibrosComponent,
    NuevoLibrosComponent,
    ModificarLibroComponent,
    MenuComponent,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
