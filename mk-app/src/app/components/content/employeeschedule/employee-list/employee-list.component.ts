import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { EmployeeService } from '../../../../services/employee/employee.service';
import { ScheduleService } from '../../../../services/schedule/schedule.service';

import { Employee } from '../../../../models/employee/employee.model';
import { Schedule } from '../../../../models/schedule/schedule.model';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees : Employee[];
  @Input() schedules : Schedule[];
  constructor(
    private employeeService : EmployeeService,
    private scheduleService : ScheduleService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit() {
    this.getEmployees();
    console.log(this.employees.find);
  }

   getEmployees() {
      this.employeeService.get()
      .subscribe(employees => {
        this.employees = employees;
      });
  }
}
