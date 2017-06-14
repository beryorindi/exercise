import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EmployeeComponent } from './employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

import { EmployeeService } from '../../../services/employee/employee.service';
import { EmployeeRoutingModule } from './employee.routing';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmployeeRoutingModule
  ],
  exports: [
    EmployeeComponent,
    EmployeeFormComponent,
    EmployeeDetailComponent,
    EmployeeRoutingModule
  ],
  declarations: [
    EmployeeComponent,
    EmployeeFormComponent,
    EmployeeDetailComponent
  ],
  providers: [
    EmployeeService
  ],
})
export class EmployeeModule { }
