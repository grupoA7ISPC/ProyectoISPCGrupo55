import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FormRutinaComponent } from './components/form-rutina/form-rutina.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    DashboardComponent,
    CalendarComponent,
    FormRutinaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
