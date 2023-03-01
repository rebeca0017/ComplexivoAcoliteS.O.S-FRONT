import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ClienteComponent } from '../../modules/dashboard/cliente/cliente.component';
import { ClienteInformacionComponent } from '../../modules/dashboard/cliente/cliente-informacion/cliente-informacion.component';
import { MecanicoComponent } from '../../modules/dashboard/mecanico/mecanico.component';
import { AuthMecanicoGuard } from '../../auth/guards/auth-mecanico.guard';
import { AuthClientGuard } from '../../auth/guards/auth-client.guard';
import { AuthAdminGuard } from '../../auth/guards/auth-admin.guard';



const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
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
        path: 'mecanico',
        canActivate: [AuthMecanicoGuard],
        component: MecanicoComponent
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
