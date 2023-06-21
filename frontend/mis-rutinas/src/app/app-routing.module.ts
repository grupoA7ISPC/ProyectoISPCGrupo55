import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, ComponenteContactoComponent, ComponenteLoginComponent, ComponenteLoginExitosoComponent, RegistroComponent, ComponenteQuienesSomosComponent, SuscripcionComponent } from './pages'

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'contacto', component: ComponenteContactoComponent},
  {path: 'login', component: ComponenteLoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'quienes-somos', component: ComponenteQuienesSomosComponent},
  {path: 'suscripcion', component: SuscripcionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
