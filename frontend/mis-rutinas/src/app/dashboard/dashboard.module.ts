import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PagesModule } from '../pages/pages.module';
import { DashboardComponent, DashboardMainComponent, TusRutinasComponent, FormRutinaComponent, MiSuscripcionComponent } from './pages';
import { CardRutinaComponent } from './components/card-rutina/card-rutina.component'

@NgModule({
  declarations: [
    DashboardComponent,
    FormRutinaComponent,
    SidebarComponent,
    DashboardMainComponent,
    TusRutinasComponent,
    MiSuscripcionComponent,
    CardRutinaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    PagesModule
  ]
})
export class DashboardModule { }
