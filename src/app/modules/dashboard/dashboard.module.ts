
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
import { SidebarComponent } from './sidebar/sidebar.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { ClienteInformacionComponent } from './cliente/cliente-informacion/cliente-informacion.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MecanicoInformacionComponent } from './mecanico/mecanico-informacion/mecanico-informacion.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CanvasBoxComponent } from './models-3d/canvas-box/canvas-box.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { MecanicoPedidosComponent } from './mecanico/mecanico-pedidos/mecanico-pedidos/mecanico-pedidos.component';



@NgModule({
  declarations: [
    MainComponent,
    HasPermissionsDirective,
    MecanicoComponent,
    ClienteComponent,
    SidebarComponent,
    ScrollToTopComponent,
    ClienteInformacionComponent,
    MecanicoInformacionComponent,
    CanvasBoxComponent,
    VehiculoComponent,
    PedidosComponent,
    MecanicoPedidosComponent
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
    NgApexchartsModule,
  ],
})
export class DashboardModule { }
