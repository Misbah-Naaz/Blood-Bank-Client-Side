import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-donor-registration',
  templateUrl: './donor-registration.component.html',
  styleUrls: ['./donor-registration.component.css']
})
export class DonorRegistrationComponent implements OnInit {
  registrationForm:FormGroup= new FormGroup({
    fname:new FormControl('',Validators.required),
    // gender:new FormControl('',Validators.required),
    dob:new FormControl('',Validators.required),
    // bloodGroup:new FormControl('',Validators.required),
    // weight:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    pno:new FormControl('',Validators.required),
    // address:new FormControl('',Validators.required),
    // city:new FormControl('',Validators.required)
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    cpassword : new FormControl('')
  })

  get Name(){
    return this.registrationForm.get('fName') as FormControl;
  }
 
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  registerSuccessful(){

   if(this.registrationForm.valid){
      console.log(this.registrationForm.value)
      Swal.fire({
        icon: 'success',
        title: 'Successful',
        text: 'Thank You For Registration!',
      })
      this.router.navigate(['/donor-login']);
    }
   else{
    Swal.fire({
      icon: 'error',
      title: 'Please Fill all the details',
      text: 'Fill Again!',
    })
    this.registrationForm.reset();
   }
  }
}
