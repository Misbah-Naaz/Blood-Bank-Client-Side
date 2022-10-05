import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { find } from 'rxjs';
import { BloodDetails, User, UserCredential} from 'src/Models/Blood-Details';
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

      this.allUser.filter((element:User)=>
      {
        if(element.email==this.Email.value && element.password == this.Password.value)
        {
          this.alert.success('Login Successfull');
          localStorage.setItem('UserName',element.email)
          localStorage.setItem('UserRole',element.userRole)
          console.log(element.userRole)
          if(element.userRole=='admin')
            this.route.navigate(['admin'])
           else
           {
            if(element.userRole=='user')
             this.route.navigate(['donor'])
            if(element.userRole==null)
             this.route.navigate(['donor'])
           }

        }
        else{
          this.alert.error("Wrong Credentials !!")

        }

        //     if(element.userRole == 'admin')
        //     {
        //       console.log('I am admin')
        //       this.route.navigate(['admin'])
        //     }
        //     else(element.userRole == 'user')
        //           this.route.navigate(['donar'])
         
          
  
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
 
}
