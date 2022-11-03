import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { User } from 'src/Models/User';
import{UserRole} from 'src/Models/UserRole';
import Swal from 'sweetalert2';
import { BBDService } from '../Services/bbd.service';
import * as alert from 'alertifyjs'
@Component({
  selector: 'app-donor-registration',
  templateUrl: './donor-registration.component.html',
  styleUrls: ['./donor-registration.component.css']
})
export class DonorRegistrationComponent implements OnInit {
  registrationForm:FormGroup= new FormGroup({
    fName:new FormControl('',Validators.required),
    lname:new FormControl('',Validators.required),
    gender:new FormControl('',Validators.required),
    dob:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    pno:new FormControl('',Validators.required),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    cpassword : new FormControl(''),
    UserRole:new FormControl('')
  })
  // userlist:User[] = [];
token:any;
  user : User = new User();
  userRoles:UserRole[]=[];
  regRequest :  User = new User();


  get Email(){
    return this.registrationForm.get('email') as FormControl;
  }
  get Password(){
    return this.registrationForm.get('password') as FormControl;
  }
  get ConfirmPassword()
  {
    return this.registrationForm.get('cpassword') as FormControl;
  }
  get FName(){
    return this.registrationForm.get('fName') as FormControl;
  }
  get LName()
  {
    return this.registrationForm.get('lname') as FormControl;
  }
  get Gender()
  {
    return this.registrationForm.get('gender') as FormControl;
  }  
  get DOB()
  {
    return this.registrationForm.get('dob') as FormControl;
  }
  get MobileNumber()
  {
    return this.registrationForm.get('pno') as FormControl;
  }
  get UserRole()
  {
    return this.registrationForm.get('UserRole') as FormControl;
  }
  constructor(private router : Router,private newUser:BBDService) { }

  ngOnInit(): void {
    this.getUserRole();
    this.token=localStorage.getItem('Token')
  console.log(this.registrationForm.value) ;

  //setting to localstorage..
  // localStorage.setItem('name','Shiza');

  // this.Fname = localStorage.getItem('name');
}
  registerSuccessful(){


   if(this.registrationForm.valid)
{
    console.log(this.registrationForm.value)
    // this.user.email = this.Email.value;
    // this.user.password = this.Password.value;
    // this.user.userRole = 'user';
    if(this.Password.value==this.ConfirmPassword.value)
   {
    this.newUser.postRegisterUser(this.requestData(),this.token).subscribe((data:any)=>{
      console.log(data)
      Swal.fire({
        icon: 'success',
        title: 'Successful',
        text: 'Thank You For Registration!',
      })
      //this.alert.success("Thank You For Registration!")
      this.router.navigate(['/login']);
    })  
    }
    else{
      console.log("Password Mismatch")
      alert.error("Password Mismatch")
      // Swal.fire({
      //   icon: 'error',
      //   text:'Password Mismatch'
      // })
     }
  } 
  //  else{
  //   Swal.fire({
  //     icon: 'error',
  //     title: 'Please Fill all the details',
  //     text: 'Fill Again!',
  //   })
  //   // this.registrationForm.reset();
  //  }
  } 
  
  requestData(){
    return (this.regRequest={
      userID: 0,
      firstName: this.FName.value,
      lastName:this.LName.value ,
      dateOfBirth: this.DOB.value,
      mobileNumber: this.MobileNumber.value,
      gender:this.Gender.value ,
      email:this.Email.value,
      password: this.Password.value,
      userRole: this.UserRole.value,
    })
  }
  getUserRole()
  {
     this.newUser.getUserRoles().subscribe((data:any)=>{
      //storing all the roles except Admin
      this.userRoles=data.filter((element:UserRole)=>{
        return element.userRole!='Admin'
        
      });
      console.log(this.userRoles)
     })
  }
}
