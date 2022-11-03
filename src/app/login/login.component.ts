import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { find } from 'rxjs';
import { LoginRequest } from 'src/Models/LoginRequest';
import { User } from 'src/Models/User';
import { UserCredential } from 'src/Models/UserCredential';
import Swal from 'sweetalert2';
import { AlertifyJSService } from '../Services/alertify-js.service';
import { BBDService } from '../Services/bbd.service';

 @Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logginRequest:LoginRequest=new LoginRequest;
    
  // @ViewChild('UserName') userInput! : ElementRef;
  loginForm:FormGroup=new FormGroup(
    {
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
    }
  )
  get Email(){
    return this.loginForm.get('email') as FormControl;
  }
  get Password(){
    return this.loginForm.get('password') as FormControl;
  }


  constructor(private route:Router,
    private alert : AlertifyJSService,
    private newlogin:BBDService) { }

  // ngDoCheck(){
  //  console.log(this.userInput.nativeElement)
  // }

  ngOnInit(): void {
 
  }
  login(){
   
    if(this.loginForm.valid)
    {
      //Providing values in the loginRequest Model

     this.logginRequest.UserName=this.Email.value;
     this.logginRequest.Password=this.Password.value;
     
     console.log(this.loginForm.value)
      this.newlogin.LoginUser(this.logginRequest).subscribe((data:any)=>{
        console.log(data);
        if(data != null){
          localStorage.setItem('UserName',data.userName);
          localStorage.setItem('UserRole',data.userRole);
          localStorage.setItem('Token',data.token);
          
          if(data.userRole=="Admin")
          {
            this.route.navigate(['admin'])
            this.alert.success("Admin Login Successful")
          }
          else{
            if(data.userRole=='Donor')
            {
              this.route.navigate(['donor'])
              this.alert.success("Donor Login Successful")
            }
          }
        }
      })
      
      // Swal.fire(
      //   {
      //     icon: 'success',
      //     title: 'Successful',
      //     text: 'User Login Successfully!',
      // })
      // this.route.navigate(['donor'])
    }
  }
}
