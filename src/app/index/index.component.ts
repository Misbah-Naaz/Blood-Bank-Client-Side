import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  isOnLoginPage : boolean = false;
  isOnRegisterPage : boolean = false;

  constructor(private router : Router) {

   }

  ngOnInit(): void {
    //checking if the activated route contains login..
    console.log(this.router.url.includes('login'));
    console.log(this.router.url.includes('donor-registration-form'));
  }

  ngDoCheck(){
        this.isOnLoginPage = this.router.url.includes('login')   
        this.isOnRegisterPage=this.router.url.includes('donor-registration-form')
      }

}
