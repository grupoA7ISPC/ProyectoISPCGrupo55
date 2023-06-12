import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardMainComponent } from './components/dashboard-main/dashboard-main.component';
import { FormRutinaComponent } from './components/form-rutina/form-rutina.component';
import { CalendarComponent } from './components/calendar/calendar.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: DashboardMainComponent},
      { path: 'crear-rutina', component: FormRutinaComponent },
      { path: 'calendario', component: CalendarComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
