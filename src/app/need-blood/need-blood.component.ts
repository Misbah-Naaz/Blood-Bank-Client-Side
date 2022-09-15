import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-need-blood',
  templateUrl: './need-blood.component.html',
  styleUrls: ['./need-blood.component.css']
})
export class NeedBloodComponent implements OnInit {
  NeedBloodForm:FormGroup=new FormGroup({
    pname:new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required),
    neededBlood:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    pno:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required),
    hname:new FormControl('',Validators.required),
    reason:new FormControl('',Validators.required),
    age:new FormControl('',Validators.required),
    unit:new FormControl('',Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
  }
  request(){
    if(this.NeedBloodForm.valid){
      console.log(this.NeedBloodForm.value)
      Swal.fire({
        icon: 'success',
        title: 'Successful',
        text: 'Your blood request is sent.Admin will contact you soon',
      })
    }
   else{
    Swal.fire({
      icon: 'error',
      title: 'Please Fill all the details',
      text: 'Fill Again!',
    })
    console.log('invalid input')
   }
  }
}
