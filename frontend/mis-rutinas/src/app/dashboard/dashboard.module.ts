import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CalendarComponent } from './components/calendar/calendar.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
