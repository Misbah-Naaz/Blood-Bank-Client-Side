import { Component, OnInit } from '@angular/core';
import { BloodDetails } from 'src/Models/Blood-Details';

@Component({
  selector: 'app-blood-bank',
  templateUrl: './blood-bank.component.html',
  styleUrls: ['./blood-bank.component.css']
})
export class BloodBankComponent implements OnInit {
  bloodBank:BloodDetails[]=[];
  constructor() { }
  dtOptions: DataTables.Settings = {};
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.bloodBank=[{
      bloodId:1,
      bloodGroup:'A+',
      available:true,
      donatedBy:'Akbar',
      useBefore:new Date(),
      price:1000,
    },
    {
      bloodId:2,
      bloodGroup:'B+',
      available:true,
      donatedBy:'Sameer',
      useBefore:new Date(),
      price:1000,
    },
    {
      bloodId:3,
      bloodGroup:'AB+',
      available:true,
      donatedBy:'Vijay',
      useBefore:new Date(),
      price:1000,
    },
    {
      bloodId:4,
      bloodGroup:'B+',
      available:true,
      donatedBy:'Satish',
      useBefore:new Date(),
      price:1000,
    },
    {
      bloodId:5,
      bloodGroup:'A+',
      available:true,
      donatedBy:'Suchita',
      useBefore:new Date(),
      price:1000,
    }
  ]
 console.log(this.bloodBank)
  }

}
