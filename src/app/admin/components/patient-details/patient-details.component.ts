import { Component, OnInit } from '@angular/core';
import { BBDService } from 'src/app/Services/bbd.service';
import { PatientDetail } from 'src/Models/PatientDetail';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  token:any;
  PatientDetailForm:PatientDetail[]=[];
  constructor(private PatientService:BBDService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('Token')
    this.getPatients();
    // this.PatientDetailForm=[{
    //   pName:'Misbah Naaz',
    //   mno:'7385424024',
    //   bloodGroup:'B+',
    //   unit:3,
    //   reason:'mdmhwiyud,wjdweumadi',
    //   address:'Aurangabad',
    //   date:new Date()
    // },
    // {
    //   pName:'Shanze',
    //   mno:'8642503179',
    //   bloodGroup:'A+',
    //   unit:5,
    //   reason:'fsjhiuwyoekakdnbvh',
    //   address:'Nagpure',
    //   date:new Date()
    // },
    // {
    //   pName:'Ajay',
    //   mno:'8964752318',
    //   bloodGroup:'AB+',
    //   unit:8,
    //   reason:'eiyuenfosf',
    //   address:'Pune',
    //   date:new Date()
    // },
    // {
    //   pName:'Wahaj',
    //   mno:'9648751237',
    //   bloodGroup:'O+',
    //   unit:4,
    //   reason:'anjyqekmmbshoio',
    //   address:'Mumbai',
    //   date:new Date()
    // },
    // ]
  }
  getPatients()
  {
    this.PatientService.getPatientDetails(this.token).subscribe((data : any)=>{
        console.log(data)
        this.PatientDetailForm=data;
    });
    // console.log(x)
  }
}
