import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './auth/guards/login.guard';
import { LoginComponent } from './modules/estatica/login/login.component';
import { RegisterComponent } from './modules/estatica/register/register.component';
import { ClienteComponent } from './modules/dashboard/cliente/cliente.component';
import { MecanicoComponent } from './modules/dashboard/mecanico/mecanico.component';
import { AuthMecanicoGuard } from './auth/guards/auth-mecanico.guard';
import { AuthClientGuard } from './auth/guards/auth-client.guard';
import { AuthAdminGuard } from './auth/guards/auth-admin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'estatic', pathMatch: 'full' },
  {
    path: 'cliente',
    canActivate: [AuthClientGuard],
    component: ClienteComponent
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
  {
    path: 'estatica',
    loadChildren: () =>
      import('./modules/estatica/estatica.module').then((m) => m.EstaticaModule),
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
