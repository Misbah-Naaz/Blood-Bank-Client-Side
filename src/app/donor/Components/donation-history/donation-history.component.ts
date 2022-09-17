import { Component, OnInit } from '@angular/core';
import { DonorHistory } from 'src/Models/Blood-Details';
@Component({
  selector: 'app-donation-history',
  templateUrl: './donation-history.component.html',
  styleUrls: ['./donation-history.component.css']
})
export class DonationHistoryComponent implements OnInit {
  details:DonorHistory[]=[];

  constructor() { }

  ngOnInit(): void {
    this.details=[
{
    bloodGroup:'B+',
    age:24,
    disease:'Nothing',
    unit:7,
    date:new Date() 
},
{
  bloodGroup:'B+',
  age:24,
  disease:'Nothing',
  unit:6,
  date:new Date() 
},
{
  bloodGroup:'B+',
  age:24,
  disease:'Nothing',
  unit:3,
  date:new Date() 
},
{
  bloodGroup:'B+',
  age:24,
  disease:'Nothing',
  unit:5,
  date:new Date() 
},
{
  bloodGroup:'B+',
  age:24,
  disease:'Nothing',
  unit:7,
  date:new Date() 
},

]
  console.log(this.details)
}
}
