import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

 @Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // @ViewChild('UserName') userInput! : ElementRef;
  loginForm:FormGroup=new FormGroup(
    {
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    }
  )
  constructor(private route:Router) { }

  // ngDoCheck(){
  //  console.log(this.userInput.nativeElement)
  // }

  ngOnInit(): void {
  }
  login(){
    if(this.loginForm.valid)
    {
      console.log(this.loginForm.value)
      Swal.fire(
        {
          icon: 'success',
          title: 'Successful',
          text: 'User Login Successfully!',
      })
      this.route.navigate(['donor'])
    }

  }

}
