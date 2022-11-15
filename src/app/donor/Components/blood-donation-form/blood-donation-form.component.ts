import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BBDService } from 'src/app/Services/bbd.service';
import { BloodDonationCenter } from 'src/Models/BloodDonationCenter';
import { BloodDonations } from 'src/Models/BloodDonations';
import { BloodGroups } from 'src/Models/BloodGroup';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-blood-donation-form',
  templateUrl: './blood-donation-form.component.html',
  styleUrls: ['./blood-donation-form.component.css']
})
export class BloodDonationFormComponent implements OnInit {
    
    DonatBloodForm:FormGroup=new FormGroup({
    bloodGroup:new FormControl('',Validators.required),
    unit:new FormControl('',Validators.required),
    disease:new FormControl('Nothing',Validators.required),
    DonationCenter:new FormControl('',Validators.required),
    DonationDate : new FormControl('',Validators.required)    
  })

  bloodDonationReq : BloodDonations = new BloodDonations();

  BloodDonationCentersList : BloodDonationCenter[] = [];

  BloodGroupsList : BloodGroups[] = [];

  token : any;

  constructor(private router:Router, private BBDService : BBDService) { }

  ngOnInit(): void {
    // getting the token...
    this.token = localStorage.getItem("Token");

    this.getBloodDonationCenters();
    this.getBloodGroups();

  }
  onSubmit(){
    if(this.DonatBloodForm.valid){
      console.log(this.DonatBloodForm.value)

      this.BBDService.addBloodDonations(this.token, this.RequestData()).subscribe((data:any)=>{
        console.log(data);

        Swal.fire({
          icon : 'success',
          title : 'Successfully Added Blood Donation Request!!',
          text : 'Success',
        })
        
      })
      
    }
    else{
      console.log('invalid inputs')
      Swal.fire({
        icon: 'error',
        title: 'Please Fill all the details',
        text: 'Fill Again!',
      })
    }
  }

  getBloodDonationCenters(){
    console.log("yead")
      this.BBDService.getBloodDonationCenters(this.token).subscribe((data : any)=>{
        this.BloodDonationCentersList = data;
        console.log(data);
      })
  }

  getBloodGroups(){
    this.BBDService.getBloodGroups(this.token).subscribe((data:any)=>{
      this.BloodGroupsList = data;
    })
  }


  RequestData(){
    return (this.bloodDonationReq = {
      bloodDonationId: 0,
      donarId: 1,
      bloodGroupId: this.DonatBloodForm.get('bloodGroup')?.value,
      donarName:  'Donar 1',
      disease:  this.DonatBloodForm.get('disease')?.value,
      unit: this.DonatBloodForm.get('unit')?.value,
      status: "pending",
      donationCenter: this.DonatBloodForm.get('DonationCenter')?.value,
      donationDate: this.DonatBloodForm.get('DonationDate')?.value,
    })
  }

  
  

}
