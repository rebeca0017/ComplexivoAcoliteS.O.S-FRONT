import { NgModule } from '@angular/core';

import { ComponentFixture } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './auth/guards/login.guard';
import { HomeComponent } from './modules/estatica/home/home.component';
import { LoginComponent } from './modules/estatica/login/login.component';
import { NavbarComponent } from './modules/estatica/navbar/navbar.component';
import { RegisterComponent } from './modules/estatica/register/register.component';
import { NosotrosComponent } from './modules/estatica/nosotros/nosotros.component';
import { ContactoComponent } from './modules/estatica/contacto/contacto.component';
import { ClienteComponent } from './modules/dashboard/cliente/cliente.component';
import { MecanicoComponent } from './modules/dashboard/mecanico/mecanico.component';
import { AuthMecanicoGuard } from './auth/guards/auth-mecanico.guard';
import { AuthClientGuard } from './auth/guards/auth-client.guard';
import { AuthAdminGuard } from './auth/guards/auth-admin.guard';

const routes: Routes = [{ path: '', redirectTo: 'auth', pathMatch: 'full' },
{
  path: '',
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', canActivate: [], component: HomeComponent },
    {
      path: 'register',
      canActivate: [LoginGuard],
      component: RegisterComponent
    },
    {
      path: 'login',
      canActivate: [LoginGuard],
      component: LoginComponent
    },
    {
      path: 'nosotros',
      canActivate: [],
      component: NosotrosComponent
    },
    {
      path: 'contacto',
      canActivate: [],
      component: ContactoComponent
    },
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
  ],
  
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
