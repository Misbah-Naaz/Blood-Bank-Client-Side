import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BloodDetails } from 'src/Models/Blood-Details';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-blood-stack',
  templateUrl: './blood-stack.component.html',
  styleUrls: ['./blood-stack.component.css']
})
export class BloodStackComponent implements OnInit {
  requestBloodForm:FormGroup=new FormGroup({
    recipient:new FormControl(''),
    message:new FormControl('')
  })
  bloodBank:BloodDetails[]=[];
  constructor() { }
  dtOptions: DataTables.Settings = {};
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.bloodBank=[
      {
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
  requestSend(){
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: `Request Submitted For ${this.requestBloodForm.get('recipient')?.value}!`
    })
    console.log(this.requestBloodForm.value)
    console.log(this.requestBloodForm.get('recipient')?.value)

  }

}
