import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ClienteComponent } from '../../modules/dashboard/cliente/cliente.component';
import { ClienteInformacionComponent } from '../../modules/dashboard/cliente/cliente-informacion/cliente-informacion.component';
import { MecanicoComponent } from '../../modules/dashboard/mecanico/mecanico.component';
import { PedidosComponent } from '../../modules/dashboard/pedidos/pedidos.component';
import { AuthMecanicoGuard } from '../../auth/guards/auth-mecanico.guard';
import { AuthClientGuard } from '../../auth/guards/auth-client.guard';
import { AuthAdminGuard } from '../../auth/guards/auth-admin.guard';
import { MecanicoInformacionComponent } from '../../modules/dashboard/mecanico/mecanico-informacion/mecanico-informacion.component';
import { VehiculoComponent } from '../../modules/dashboard/vehiculo/vehiculo.component';
import { CanvasBoxComponent } from './models-3d/canvas-box/canvas-box.component';
import { MecanicoPedidosComponent } from './mecanico/mecanico-pedidos/mecanico-pedidos/mecanico-pedidos.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'vehiculo',
        canActivate: [AuthClientGuard],
        component: VehiculoComponent
      },
      {
        path: 'cliente',
        canActivate: [AuthClientGuard],
        component: ClienteComponent
      },
      {
        path: 'cliente-info',
        canActivate: [AuthClientGuard],
        component: ClienteInformacionComponent
      },
      {
      path: 'pedidos',
        canActivate: [AuthClientGuard],
        component: PedidosComponent
      },
      {
        path: 'mecanico-pedidos',
        canActivate: [AuthMecanicoGuard],
        component: MecanicoPedidosComponent
      },
      {
        path: 'mecanico',
        canActivate: [AuthMecanicoGuard],
        component: MecanicoComponent
      },
      {
        path: 'mecanico-info',
        canActivate: [AuthMecanicoGuard],
        component: MecanicoInformacionComponent
      },
      {
        path: 'admin',
        canActivate: [AuthAdminGuard],
        component: MecanicoComponent
      },
    ],

  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
