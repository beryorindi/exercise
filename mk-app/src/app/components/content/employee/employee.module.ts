import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EmployeeComponent } from './employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

import { EmployeeService } from '../../../services/employee/employee.service';
import { EmployeeRoutingModule } from './employee.routing';
import { MaterialModule } from '@angular/material';
import { MdNativeDateModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmployeeRoutingModule,
    MaterialModule,
    MdNativeDateModule,
    CdkTableModule
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
