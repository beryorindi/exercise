import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ScheduleComponent } from './schedule.component';
//import { ScheduleDetailComponent } from './employee-detail/employee-detail.component';

import { ScheduleService } from '../../../services/schedule/schedule.service';
import { ScheduleRoutingModule } from './schedule.routing';
import { ScheduleFormComponent } from './schedule-form/schedule-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ScheduleRoutingModule
  ],
  exports :[
    ScheduleComponent,
    ScheduleRoutingModule,
    ScheduleFormComponent
  ],
  declarations: [
    ScheduleComponent,
    ScheduleFormComponent
  ],
  providers:[
    ScheduleService
  ]
})
export class ScheduleModule { }
