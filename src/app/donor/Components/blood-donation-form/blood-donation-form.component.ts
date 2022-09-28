import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-blood-donation-form',
  templateUrl: './blood-donation-form.component.html',
  styleUrls: ['./blood-donation-form.component.css']
})
export class BloodDonationFormComponent implements OnInit {
    
    DonatBloodForm:FormGroup=new FormGroup({
    fname:new FormControl('',Validators.required),
    bloodGroup:new FormControl('',Validators.required),
    unit:new FormControl('',Validators.required),
    age:new FormControl('',Validators.required),
    disease:new FormControl('Nothing',Validators.required),
    city:new FormControl('',Validators.required)
  })
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  submitted(){
    if(this.DonatBloodForm.valid){
      console.log(this.DonatBloodForm.value)
      this.router.navigate(['/donor/donation-history'])
      
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
