import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { UserCredential } from 'src/Models/Blood-Details';
import Swal from 'sweetalert2';
import { BBDService } from '../Services/bbd.service';

@Component({
  selector: 'app-donor-registration',
  templateUrl: './donor-registration.component.html',
  styleUrls: ['./donor-registration.component.css']
})
export class DonorRegistrationComponent implements OnInit {
  registrationForm:FormGroup= new FormGroup({
    fname:new FormControl('',Validators.required),
    lname:new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required),
    dob:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    pno:new FormControl('',Validators.required),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    cpassword : new FormControl('')
  })
  userlist:UserCredential[] = [];
  Fname : any
  user : UserCredential = new UserCredential();


  get Email(){
    return this.registrationForm.get('email') as FormControl;
  }
  get Password(){
    return this.registrationForm.get('password') as FormControl;
  }

  // get Name(){
  //   return this.registrationForm.get('fName') as FormControl;
  // }

  constructor(private router : Router,private newUser:BBDService) { }

  ngOnInit(): void {
  console.log(this.registrationForm.value) ;

  //setting to localstorage..
  localStorage.setItem('name','Shiza');

  this.Fname = localStorage.getItem('name');
}
  registerSuccessful(){


   if(this.registrationForm.valid){
      console.log(this.registrationForm.value)
      this.user.Email = this.Email.value;
    this.user.Password = this.Password.value;
    this.user.UserRole = 'user';
    this.newUser.postRegisterUser(this.user).subscribe((data:any)=>{
      console.log(data)
      Swal.fire({
        icon: 'success',
        title: 'Successful',
        text: 'Thank You For Registration!',
      })
      this.router.navigate(['/donor-login']);
    })
      
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
