import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScheduleComponent } from './schedule.component';
import { ScheduleFormComponent } from './schedule-form/schedule-form.component';

const scheduleRoutes: Routes = [
  {
    path: 'schedules',
    component: ScheduleComponent
  },
   {
    path: 'add_schedule',
    component: ScheduleFormComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(scheduleRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    
  ]
})
export class ScheduleRoutingModule { }