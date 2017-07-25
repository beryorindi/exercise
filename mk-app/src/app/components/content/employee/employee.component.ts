import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { EmployeeService } from '../../../services/employee/employee.service';

import { Employee } from '../../../models/employee/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  private selectedEmployeeId : Employee;
  dataSource = [];
  employees = [];
  displayedColumns = [];

  @Output() selectedEmployee = new EventEmitter();
  private delete = false;
  constructor(
    private employeeService : EmployeeService,
    private route : ActivatedRoute,
    private router : Router
  ) {}

  ngOnInit() {
    this.getEmployees();
    this.displayedColumns = ['name', 'gender', 'phone', 'dob'];
    this.dataSource = this.employees;
  }

  connect() {
    
  }

  disconnect() {
    this.dataSource = null;
    this.displayedColumns = [];
  }

  getEmployees() {
      this.employeeService.get()
      .subscribe(employees => {
        this.employees = employees;
      });
  }

  onSelect(employee: Employee) {
    this.router.navigate(['/employee', employee.id]);
  }
  
  toggleDelete(){
    if(this.delete == true){
      this.delete = false;
    }
    else{
      this.delete = true;
    }
  }

  onDelete(employee){
    this.employeeService.delete(employee.id);
    this.delete = false;
  }
}
