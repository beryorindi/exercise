import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/Rx';

import { Schedule } from '../../models/schedule/schedule.model';

@Injectable()
export class ScheduleService {
  private serverURL;
  private schedules: BehaviorSubject<Schedule[]>;
  private _schedules: Schedule[];

  constructor(private http : Http) { 
    this.serverURL = '/api/schedules/';
    this.schedules = new BehaviorSubject<Schedule[]>([]);
    this.load();
  }

  load() {
    this.http.get(this.serverURL)
      .map(response => response.json())
      .subscribe(data => {
        this._schedules = data;
        this.schedules.next(this._schedules);
      });
  }

  get() {
    return this.schedules.asObservable();
  }
  
  getSchedule(id) {
    return this._schedules.find(schedule => schedule.id == id);
  }

  save(schedule) {
    let body = JSON.stringify(schedule);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    this.http.post(this.serverURL, body, options)
        .map(response => response.json())
        .subscribe(data => this._schedules.push(data))
    
    this.schedules.next(this._schedules);
  }

  update(schedule) {
    let body = JSON.stringify(schedule);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.put(this.serverURL, body, options)
        .map(response => response.json())
        .subscribe(data => this._schedules
          .forEach((emp, i) => {
            if (emp.id === schedule.id) { this._schedules[i] = data; }
          })
    )
    this.schedules.next(this._schedules);
  }

  delete(schedulesId) {
    this.http.delete(this.serverURL+schedulesId)
      .subscribe(response => {
        this._schedules.forEach((sch, i) => {
          if (sch.id === schedulesId) {
            this._schedules.splice(i, 1);
          }
        });
        this.schedules.next(this._schedules);
      })
  }
}
