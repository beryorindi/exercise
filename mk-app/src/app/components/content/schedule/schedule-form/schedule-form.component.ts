import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ScheduleService } from '../../../../services/schedule/schedule.service';

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.css']
})
export class ScheduleFormComponent implements OnInit {
  private schedule;
  private id;
  formadd;

  constructor(
    private formBuilder: FormBuilder,
    private scheduleService : ScheduleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.emptyForm();
    this.route.params
     .subscribe(params => {
        //console.log(params['id']);
        this.schedule = this.scheduleService.getSchedule(params['id']);
        this.id = params['id'];
     })
  }

  emptyForm(){
    this.formadd = this.formBuilder.group({
      day: this.formBuilder.control('', Validators.compose([
        Validators.required])),
      period: this.formBuilder.control('', Validators.compose([
        Validators.required]))
    })
  }

  save(schedule) {
    if(!this.schedule){
      //console.log("add");
    this.scheduleService.save(schedule);
  }else{
      schedule.id = this.id;
      //console.log(employee);
      //console.log("update");
      this.scheduleService.update(schedule);
    }
    this.gotoSchedules();
  }

  gotoSchedules() {
    this.router.navigate(['/schedules']);
  }

}
