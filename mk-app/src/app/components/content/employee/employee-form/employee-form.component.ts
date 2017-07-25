import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { EmployeeService } from '../../../../services/employee/employee.service';

import {MdInputModule} from '@angular/material';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  private employee;
  private id;
  formadd;
  private uploadURL;

  constructor(
    private formBuilder: FormBuilder,
    private employeeService : EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.emptyForm();
    this.route.params
     .subscribe(params => {
        //console.log(params['id']);
        this.employee = this.employeeService.getEmployee(params['id']);
        this.id = params['id'];
     })

    if(!this.employee){
      this.uploadURL = '../../../../../media/blank_profil.png';
    }else{
      this.uploadURL = this.employee.imageUrl;
    }
  }

  emptyForm(){
    this.formadd = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      gender: this.formBuilder.control('', Validators.compose([
        Validators.required])),
      dob: this.formBuilder.control('', Validators.compose([
        Validators.required])),
      phone: this.formBuilder.control('', Validators.compose([
        Validators.required])),
      imageUrl : this.formBuilder.control('', Validators.compose([
        Validators.required]))
    })
  }

  save(employee) {
    employee.imageUrl = this.uploadURL;
    if(!this.employee){
      //console.log("add");
    this.employeeService.save(employee);
  }else{
      employee.id = this.id;
      //console.log(employee);
      //console.log("update");
      this.employeeService.update(employee);
    }
    
    this.gotoEmployees();
  }

  imgProcess(photo){
    var test;
    var image = new FileReader();
    image.onload = (photo: any)=>{
      this.uploadURL = photo.target.result;
    }
    image.readAsDataURL(photo.target.files[0]);
  }

  gotoEmployees() {
    this.router.navigate(['/employees']);
  }
}
