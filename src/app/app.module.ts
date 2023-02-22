import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { LoginComponent } from './modules/estatica/login/login.component';
import { NavbarComponent } from './modules/estatica/navbar/navbar.component';
import { RegisterComponent } from './modules/estatica/register/register.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './modules/estatica/home/home.component';
import { NosotrosComponent } from './modules/estatica/nosotros/nosotros.component';
import { ContactoComponent } from './modules/estatica/contacto/contacto.component';
import { ScrollToTopComponent } from './modules/estatica/scroll-to-top/scroll-to-top.component';
import { MecanicoComponent } from './modules/dashboard/mecanico/mecanico.component';
import { ClienteComponent } from './modules/dashboard/cliente/cliente.component';
import { HasPermissionsDirective } from './auth/has-permission.directive';

@NgModule({
  declarations: [
    HasPermissionsDirective,
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    NosotrosComponent,
    ContactoComponent,
    ScrollToTopComponent,
    MecanicoComponent,
    ClienteComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    RouterModule
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
