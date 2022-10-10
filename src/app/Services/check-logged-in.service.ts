import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckLoggedInService {
  check:boolean=false;
  userRole:any;
  constructor() { }
  matchUserName()
  {
    this.userRole=localStorage.getItem('UserRole')
    if(this.userRole=='user' || this.userRole=='admin')
     this.check=true;
  }

}
