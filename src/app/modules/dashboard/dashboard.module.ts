
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { MecanicoComponent } from './mecanico/mecanico.component';
import { ClienteComponent } from './cliente/cliente.component';
import { HasPermissionsDirective } from '../../auth/has-permission.directive';
import { SidebarComponent } from './cliente/sidebar/sidebar.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { ClienteInformacionComponent } from './cliente/cliente-informacion/cliente-informacion.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormField } from '@angular/material/form-field';

@NgModule({
  declarations: [
    MainComponent,
    HasPermissionsDirective,
    MecanicoComponent,
    ClienteComponent,
    SidebarComponent,
    ScrollToTopComponent,
    ClienteInformacionComponent
  ],
  imports: [
    BrowserModule,
    DashboardRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    RouterModule,
    IonicModule.forRoot(),
    LayoutModule,
    MatSidenavModule,
    MatListModule,
  ],
})
export class DashboardModule { }
