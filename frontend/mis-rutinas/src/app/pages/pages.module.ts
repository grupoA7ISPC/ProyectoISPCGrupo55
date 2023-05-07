import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponenteQuienesSomosComponent } from './componente-quienes-somos/componente-quienes-somos.component';
import { ComponenteContactoComponent } from './componente-contacto/componente-contacto.component';
import { ComponenteLoginComponent } from './componente-login/componente-login.component';
import { ComponenteLoginExitosoComponent } from './componente-login-exitoso/componente-login-exitoso.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { TarjetasIntegrantesComponent } from './componente-quienes-somos/tarjetas-integrantes/tarjetas-integrantes.component';

@NgModule({
  declarations: [
    ComponenteQuienesSomosComponent,
    ComponenteContactoComponent,
    ComponenteLoginComponent,
    ComponenteLoginExitosoComponent,
    HomeComponent,
    RegistroComponent,
    TarjetasIntegrantesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ComponenteContactoComponent, ComponenteQuienesSomosComponent,ComponenteLoginComponent,ComponenteLoginExitosoComponent, HomeComponent,
    RegistroComponent, ],
})
export class PagesModule { }
