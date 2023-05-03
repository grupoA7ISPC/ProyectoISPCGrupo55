import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteQuienesSomosComponent } from './componente-quienes-somos/componente-quienes-somos.component';
import { ComponenteContactoComponent } from './componente-contacto/componente-contacto.component';



@NgModule({
  declarations: [
    ComponenteQuienesSomosComponent,
    ComponenteContactoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
