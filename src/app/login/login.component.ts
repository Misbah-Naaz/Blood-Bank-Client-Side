import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { find } from 'rxjs';
import { BloodDetails, UserCredential} from 'src/Models/Blood-Details';
import Swal from 'sweetalert2';
import { BBDService } from '../Services/bbd.service';

 @Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  allUser:UserCredential[]=[];
  user : UserCredential = new UserCredential();
  // @ViewChild('UserName') userInput! : ElementRef;
  loginForm:FormGroup=new FormGroup(
    {
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    }
  )
  get Email(){
    return this.loginForm.get('email') as FormControl;
  }
  get Password(){
    return this.loginForm.get('password') as FormControl;
  }


  constructor(private route:Router,private newlogin:BBDService) { }

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
    //   this.user.email=this.Email.value;
    //   this.user.password=this.Password.value;
    //   this.newlogin.getLoginUser().subscribe((data:any)=>{
    //     console.log(data)
    // })
      Swal.fire(
        {
          icon: 'success',
          title: 'Successful',
          text: 'User Login Successfully!',
      })
      this.route.navigate(['donor'])
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
 
}
