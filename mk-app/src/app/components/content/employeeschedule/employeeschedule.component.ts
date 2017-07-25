import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { EmployeeService } from '../../../services/employee/employee.service';
import { ScheduleService } from '../../../services/schedule/schedule.service';

import { Employee } from '../../../models/employee/employee.model';
import { Schedule } from '../../../models/schedule/schedule.model';

@Component({
  selector: 'app-employeeschedule',
  templateUrl: './employeeschedule.component.html',
  styleUrls: ['./employeeschedule.component.css']
})
export class EmployeescheduleComponent implements OnInit {
  schedules = [];

  constructor(
    private employeeService : EmployeeService,
    private scheduleService : ScheduleService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit() {
      this.getSchedule();
  }

  getSchedule() {
      this.scheduleService.get()
      .subscribe(schedules => {
        this.schedules = schedules;
      });
  }

}
