import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { EmployeeService } from '../../../../services/employee/employee.service';

import { Employee } from '../../../../models/employee/employee.model';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employee : Employee;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService : EmployeeService
  ) { }

  ngOnInit() {
     this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.employeeService.getEmployee(params['id']))
      .subscribe((employee: Employee) => this.employee = employee);

      console.log(this.employee)
  }

  gotoEmployees() {
    this.router.navigate(['/employees']);
  }

}
