import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { EmployeeService } from '../../../../services/employee/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  formadd;
  private uploadURL;

  constructor(
    private formBuilder: FormBuilder,
    private employeeService : EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.uploadURL = '../../../../../media/blank_profil.png';
    this.emptyForm();
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

  add(employee) {
    employee.imageUrl = this.uploadURL;
    console.log(employee);
    this.employeeService.save(employee);
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
