import { Component, OnInit } from '@angular/core';
import { DonorDetail } from 'src/Models/Blood-Details';

@Component({
  selector: 'app-donor-details',
  templateUrl: './donor-details.component.html',
  styleUrls: ['./donor-details.component.css']
})
export class DonorDetailsComponent implements OnInit {
  DonorDetailForm:DonorDetail[]=[];
  constructor() { }

  ngOnInit(): void {
    this.DonorDetailForm=[
      {
          dName:'Ali',
          bloodGroup:'A+',
          age:26,
          disease:'Nothing',
          unit:7,
          date:new Date() 
      },
      {
        dName:'Taimur',
        bloodGroup:'B+',
        age:24,
        disease:'Nothing',
        unit:6,
        date:new Date() 
      },
      {
        dName:'Ayesha',
        bloodGroup:'AB+',
        age:20,
        disease:'Nothing',
        unit:3,
        date:new Date() 
      },
      {
        dName:'Zainab',
        bloodGroup:'B+',
        age:21,
        disease:'Nothing',
        unit:5,
        date:new Date() 
      },
      {
        dName:'Huzaif',
        bloodGroup:'A+',
        age:20,
        disease:'Nothing',
        unit:8,
        date:new Date() 
      }]
      
  }

}
