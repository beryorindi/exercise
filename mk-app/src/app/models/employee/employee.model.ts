import {Schedule } from '../schedule/schedule.model';
export class Employee {
  id:String;
  name:String;
  username:String;
  password:String;
  gender:String;
  dob:Date;
  phone:String;
  imageUrl:String;
  schedules : Schedule[];
}