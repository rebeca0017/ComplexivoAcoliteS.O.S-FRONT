
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardRoutingModule } from './modules/dashboard/dashboard-routing.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { EstaticaRoutingModule } from './modules/estatica/estatica-routing.module';
import { EstaticaModule } from './modules/estatica/estatica.module';
import { VehiculoComponent } from './modules/dashboard/vehiculo/vehiculo.component';


@NgModule({
  declarations: [
    AppComponent,
    VehiculoComponent
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
    DashboardModule,
    DashboardRoutingModule,
    IonicModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }