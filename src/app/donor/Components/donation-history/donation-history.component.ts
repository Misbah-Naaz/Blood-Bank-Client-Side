import { Component, OnInit } from '@angular/core';
import { BBDService } from 'src/app/Services/bbd.service';
import { DonorDetail, DonorHistory } from 'src/Models/Blood-Details';
@Component({
  selector: 'app-donation-history',
  templateUrl: './donation-history.component.html',
  styleUrls: ['./donation-history.component.css']
})
export class DonationHistoryComponent implements OnInit {
  details:DonorHistory[]=[];
  // details:DonorDetail[]=[];
  // constructor(private DonorService:BBDService) { }

  ngOnInit(): void {
    this.details=[
{
  id:1,
  name:'Ayesha',
  age:24,
  bloodGroup:'B+',
  unit:7,
  disease:'Nothing',
  city:'Aurangabad',
  date:new Date() 
},
{
  id:2,
  name:'Ayesha',
  age:24,
  bloodGroup:'B+',
  unit:6,
  disease:'Nothing',
  city:'Nanded',
  date:new Date() 
},
{
  id:3,
  name:'Ayesha',
  age:24,
  bloodGroup:'B+',
  unit:3,
  disease:'Nothing',
  city:'Aurangabad',
  date:new Date() 
},
{ id:3,
  name:'Ayesha',
  age:24,
  bloodGroup:'B+',
  unit:5,
  disease:'Nothing',
  city:'Nanded',
  date:new Date() 
},
{
  id:4,
  name:'Ayesha',
  age:24,
  bloodGroup:'B+',
  unit:7,
  disease:'Nothing',
  city:'Aurangabad',
  date:new Date() 
},

]
  console.log(this.details) 
}
// getDonorDetail()
// {
//   this.DonorService.getDonorDetails().subscribe((data:any)=>{
//     console.log(data);
//     this.details = data;
//   }
//   )
// }
}
