import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { find } from 'rxjs';
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
  allUser:User[]=[];
  user : User = new User();
  LoggedinUser:UserCredential=new UserCredential();
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
  this.getAllUser();
  }
  login(){
   
    if(this.loginForm.valid)
    {
      console.log(this.loginForm.value)

      this.newlogin.LoginUser(this.loginForm.value).subscribe((data:any)=>{
        console.log(data);
        if(data != null){
          localStorage.setItem('UserName',data.email);
          localStorage.setItem('UserRole',data.userRole);

          if(data.userRole=="admin")
          {
            this.route.navigate(['admin'])
            this.alert.success("Admin Login Successful")
          }
          else{
            if(data.userRole=='user')
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

  getAllUser()
  {
    this.newlogin.getLoginUser().subscribe((data:any)=>
    {
      this.allUser=data;
      console.log(this.allUser)
    })
  }
  requestData(){
    return (this.LoggedinUser={
      UserID : 0,
      UCID : 0,
      UserRole : '',
      Email:this.Email.value,
      Password: this.Password.value,
    })
  }
}
