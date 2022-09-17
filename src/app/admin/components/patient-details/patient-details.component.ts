import { Component, OnInit } from '@angular/core';
import { PatientDetail } from 'src/Models/Blood-Details';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  PatientDetailForm:PatientDetail[]=[];
  constructor() { }

  ngOnInit(): void {
    this.PatientDetailForm=[{
      pName:'Misbah Naaz',
      mno:'7385424024',
      bloodGroup:'B+',
      unit:3,
      reason:'mdmhwiyud,wjdweumadi',
      address:'Aurangabad',
      date:new Date()
    },
    {
      pName:'Shanze',
      mno:'8642503179',
      bloodGroup:'A+',
      unit:5,
      reason:'fsjhiuwyoekakdnbvh',
      address:'Nagpure',
      date:new Date()
    },
    {
      pName:'Ajay',
      mno:'8964752318',
      bloodGroup:'AB+',
      unit:8,
      reason:'eiyuenfosf',
      address:'Pune',
      date:new Date()
    },
    {
      pName:'Wahaj',
      mno:'9648751237',
      bloodGroup:'O+',
      unit:4,
      reason:'anjyqekmmbshoio',
      address:'Mumbai',
      date:new Date()
    },
    ]
  }

}
