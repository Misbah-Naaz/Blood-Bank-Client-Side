import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit {
  loggedInUser:any;
  constructor() { }

  ngOnInit(): void {
    this.loggedInUser=localStorage.getItem('UserName')
    console.log(this.loggedInUser)
  }

}
