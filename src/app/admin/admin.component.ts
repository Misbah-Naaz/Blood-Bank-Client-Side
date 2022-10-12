import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 loggedinUserName:any=null;
  constructor() { }

  ngOnInit(): void {
    this.loggedinUserName=localStorage.getItem('UserName');
    console.log(this.loggedinUserName);
  }
 
}
