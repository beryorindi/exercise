import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ScheduleService } from '../../../services/schedule/schedule.service';

import { Schedule } from '../../../models/schedule/schedule.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  schedules = [];
  constructor(
    private scheduleService : ScheduleService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit() {
    this.getSchedules();
  }


  getSchedules() {
      this.scheduleService.get()
      .subscribe(schedules => {
        this.schedules = schedules;
      });
  }
}
