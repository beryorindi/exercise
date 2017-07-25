import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 import { EmployeescheduleComponent } from './employeeschedule.component';
// import { EmployeeFormComponent } from './employee-form/employee-form.component';
// import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

const employeeRoutes: Routes = [
  {
    path: 'employeeschedule',
    component: EmployeescheduleComponent,
  }
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
export class EmployeescheduleRoutingModule { }