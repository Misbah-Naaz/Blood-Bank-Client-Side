import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-blood-donation-form',
  templateUrl: './blood-donation-form.component.html',
  styleUrls: ['./blood-donation-form.component.css']
})
export class BloodDonationFormComponent implements OnInit {
  DonatBloodForm:FormGroup=new FormGroup({
    bloodGroup:new FormControl('',Validators.required),
    unit:new FormControl('',Validators.required),
    age:new FormControl('',Validators.required),
    disease:new FormControl('Nothing',Validators.required)

  })
  constructor() { }

  ngOnInit(): void {
  }
  submitted(){
    if(this.DonatBloodForm.valid){
      console.log(this.DonatBloodForm.value)
    }
    else{
      console.log('invalid inputs')
      Swal.fire({
        icon: 'error',
        title: 'Please Fill all the details',
        text: 'Fill Again!',
      })
    }
  }
}
