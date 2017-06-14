import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/Rx';

import { Employee } from '../../models/employee/employee.model';

@Injectable()
export class EmployeeService {
  private serverURL;
  private employees: BehaviorSubject<Employee[]>;
  private _employees: Employee[];
  private selectedEmployee: BehaviorSubject<Employee>;
  private employeePromise = Promise.resolve(this._employees);

  constructor(private http: Http) { 
    this.serverURL = '/api/employees/';
    this.employees = new BehaviorSubject<Employee[]>([]);
    this.selectedEmployee = new BehaviorSubject<Employee>(new Employee);
    this.load();
   }

  load() {
    this.http.get(this.serverURL)
      .map(response => response.json())
      .subscribe(data => {
        this._employees = data;
        this.employees.next(this._employees);
      });
  }

  get() {
    return this.employees.asObservable();
  }

  getEmployee(id: String) {
    return this.employeePromise
      .then(employees => employees.find(employee => employee.id === id));
  }

  selectEmployee(employee) {
    this.selectedEmployee.next(employee);
  }

  getSelectedEmployee() {
    //console.log(this.selectedEmployee.asObservable());
    return this.selectedEmployee.asObservable();
  }

  save(employee) {
    let body = JSON.stringify(employee);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    this.http.post(this.serverURL, body, options)
        .map(response => response.json())
        .subscribe(data => this._employees.push(data))
    
    this.employees.next(this._employees);
  }

  delete(empId) {
    this.http.delete(this.serverURL+empId)
      .subscribe(response => {
        this._employees.forEach((emp, i) => {
          if (emp.id === empId) {
            this._employees.splice(i, 1);
          }
        });
        this.employees.next(this._employees);
      })
  }
  
}