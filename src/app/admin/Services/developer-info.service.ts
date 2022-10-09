import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeveloperInfoService {

  ProjectName : string = 'Blood Bank Management System'
  DeveloperName : string = 'Miss Naaz'

  // this will give the current so...we don't have to manually change it every year..
  Year : number = new Date().getFullYear();

  // we can also place other information like mobile, social media details, address here..

  constructor() { }
}
