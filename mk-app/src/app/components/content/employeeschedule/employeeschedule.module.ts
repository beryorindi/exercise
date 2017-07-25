import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EmployeescheduleComponent } from './employeeschedule.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import { EmployeeService } from '../../../services/employee/employee.service';
import { EmployeescheduleRoutingModule } from './employeeschedule.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmployeescheduleRoutingModule
  ],
  exports: [
    EmployeescheduleComponent,
    EmployeeListComponent,
    EmployeescheduleRoutingModule
  ],
  declarations: [
    EmployeescheduleComponent,
    EmployeeListComponent,
    // EmployeeFormComponent,
    // EmployeeDetailComponent
  ],
  providers: [
    EmployeeService
  ],
})
export class EmployeescheduleModule { }
