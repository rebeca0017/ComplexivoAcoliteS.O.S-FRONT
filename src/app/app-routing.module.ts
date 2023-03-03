import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { VehiculoComponent } from './modules/dashboard/vehiculo/vehiculo.component';
import { AuthAdminGuard } from './auth/guards/auth-admin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'estatic', pathMatch: 'full' },
  {
    path: 'estatica',
    loadChildren: () =>
      import('./modules/estatica/estatica.module').then((m) => m.EstaticaModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
