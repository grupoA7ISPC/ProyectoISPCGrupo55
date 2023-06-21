import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent, DashboardMainComponent, TusRutinasComponent, FormRutinaComponent, MiSuscripcionComponent } from './pages'

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      // { path: '', component: DashboardMainComponent},
      // { path: 'rutinas', component: TusRutinasComponent },
      { path: '', component: TusRutinasComponent },
      { path: 'crear-rutina', component: FormRutinaComponent },
      { path: 'mi-suscripcion', component:  MiSuscripcionComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
