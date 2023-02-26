
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { LoginComponent } from './modules/estatica/login/login.component';
import { RegisterComponent } from './modules/estatica/register/register.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MecanicoComponent } from './modules/dashboard/mecanico/mecanico.component';
import { ClienteComponent } from './modules/dashboard/cliente/cliente.component';
import { HasPermissionsDirective } from './auth/has-permission.directive';
import { SidebarComponent } from './modules/estatica/sidebar/sidebar.component';
import { EstaticaRoutingModule } from './modules/estatica/estatica-routing.module';
import { EstaticaModule } from './modules/estatica/estatica.module';



@NgModule({
  declarations: [
    HasPermissionsDirective,
    AppComponent,
    MecanicoComponent,
    ClienteComponent,
    SidebarComponent
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
    EstaticaRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    RouterModule,
    EstaticaModule,
    IonicModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }