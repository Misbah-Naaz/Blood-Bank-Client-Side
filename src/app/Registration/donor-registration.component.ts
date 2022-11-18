import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { User } from 'src/Models/User';
import{UserRole} from 'src/Models/UserRole';
import Swal from 'sweetalert2';
import { BBDService } from '../Services/bbd.service';
import * as alert from 'alertifyjs'
import { RecoverPasswordQuestions } from 'src/Models/RecoverPasswordQuestion';
import { RegisterUser } from 'src/Models/RegisterUser';
import { AlertifyJSService } from '../Services/alertify-js.service';
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
    UserRole:new FormControl('',[Validators.required]),
    // recoverPasswordQuestion : new FormControl(''),
    // recoverPasswordAnswer : new FormControl('')
  })
  // userlist:User[] = [];
token:any;
  user : User = new User();
  userRoles:UserRole[]=[];
  regRequest :  RegisterUser = new RegisterUser();

  questionText : string = '';

  RecoverPasswordQuestions : RecoverPasswordQuestions[] = [];


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

  // get recoverPasswordQuestion()
  // {
  //   return this.registrationForm.get('recoverPasswordQuestion') as FormControl;
  // }

  // get recoverPasswordAnswer()
  // {
  //   return this.registrationForm.get('recoverPasswordAnswer') as FormControl;
  // }


  constructor(private router : Router,private newUser:BBDService,private alertify:AlertifyJSService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('Token');
    this.getUserRole();
  console.log(this.registrationForm.value);

  //setting to localstorage..
  // localStorage.setItem('name','Shiza');

  // this.Fname = localStorage.getItem('name');
}
  registerSuccessful(){
    console.log(this.requestData());
   if(this.registrationForm.valid)
{
    // console.log(this.registrationForm.value)
    if(this.Password.value==this.ConfirmPassword.value)
   {    
    this.newUser.postRegisterUser(this.requestData(),this.token).subscribe((data:any)=>{
      console.log(data)
      Swal.fire({
        icon: 'success',
        title: 'Successful',
        text: 'Thank You For Registration!',
      })
      // this.alertify.success("Thank You For Registration!")
      this.router.navigate(['/login']);
    })  
    }
    else{
      console.log("Password Mismatch")
      Swal.fire({
        icon:'error',
        text:'Password Mismatched'})
     }
  } 
   else{
    // Swal.fire({
    //   icon: 'error',
    //   title: 'Please Fill all the details',
    //   text: 'Fill Again!',
    // })
    this.alertify.error('Kindly Provide Required Feilds')
     this.registrationForm.reset();
   }
  } 
  requestData(){
    let currentYear=new Date().getFullYear() 
    let birthYear=new Date(this.DOB.value).getFullYear()
    return (this.regRequest={
      firstName:this.FName.value,//call get function and assign value to object key
      lastName:this.registrationForm.get('lname')?.value,//taking values directly from form group
      phoneNumber:this.MobileNumber.value,
      email:this.Email.value,
      gender:this.Gender.value,
      dob: this.DOB.value,
      age: currentYear-birthYear,
      password:this.Password.value,
      registerAs:this.UserRole.value
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
