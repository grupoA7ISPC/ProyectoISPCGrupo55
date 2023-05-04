import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteQuienesSomosComponent } from './componente-quienes-somos/componente-quienes-somos.component';
import { ComponenteContactoComponent } from './componente-contacto/componente-contacto.component';
import { ComponenteLoginComponent } from './componente-login/componente-login.component';
import { ComponenteLoginExitosoComponent } from './componente-login-exitoso/componente-login-exitoso.component';



@NgModule({
  declarations: [
    ComponenteQuienesSomosComponent,
    ComponenteContactoComponent,
    ComponenteLoginComponent,
    ComponenteLoginExitosoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ComponenteContactoComponent, ComponenteQuienesSomosComponent,ComponenteLoginComponent,ComponenteLoginExitosoComponent ],
})
export class PagesModule { }
