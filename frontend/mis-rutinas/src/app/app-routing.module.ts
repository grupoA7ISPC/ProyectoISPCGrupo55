import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ComponenteContactoComponent } from './pages/componente-contacto/componente-contacto.component';
import { ComponenteLoginComponent } from './pages/componente-login/componente-login.component';
import { ComponenteLoginExitosoComponent } from './pages/componente-login-exitoso/componente-login-exitoso.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ComponenteQuienesSomosComponent } from './pages/componente-quienes-somos/componente-quienes-somos.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'contacto', component: ComponenteContactoComponent},
  {path: 'login', component: ComponenteLoginComponent},
  // {path: 'login-exitoso', component: ComponenteLoginExitosoComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'quienes-somos', component: ComponenteQuienesSomosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
