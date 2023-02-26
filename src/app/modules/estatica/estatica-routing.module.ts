import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MainComponent } from './main/main.component';
import { LoginGuard } from 'src/app/auth/guards/login.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
{
  path: '',
  component: MainComponent,
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
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
    { path: 'home', component: HomeComponent },
    {
      path: 'nosotros',
      component: NosotrosComponent
    },
    {
      path: 'contacto',
      component: ContactoComponent
    },
  ],

},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstaticaRoutingModule { }
