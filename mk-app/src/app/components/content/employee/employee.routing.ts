import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

const employeeRoutes: Routes = [
  {
    path: 'employees',
    component: EmployeeComponent,
  },
    {
    path: 'add_employee',
    component: EmployeeFormComponent,
  },
  {
    path: 'employee/:id',
    component: EmployeeDetailComponent,
  },
  {
    path: 'edit_employee/:id',
    component: EmployeeFormComponent,
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(employeeRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    
  ]
})
export class EmployeeRoutingModule { }