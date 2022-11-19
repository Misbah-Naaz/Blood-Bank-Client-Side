import { Component, OnInit } from '@angular/core';
import { BBDService } from 'src/app/Services/bbd.service';
import { BloodDonations } from 'src/Models/BloodDonations';
import { DonorHistory } from 'src/Models/DonorHistory';
@Component({
  selector: 'app-donation-history',
  templateUrl: './donation-history.component.html',
  styleUrls: ['./donation-history.component.css']
})
export class DonationHistoryComponent implements OnInit {
  token: any;
  DonarId : any;
  BloodDonationHistory : BloodDonations[] = [];
  // details:DonorDetail[]=[];
  // constructor(private DonorService:BBDService) { }

  constructor(private BBDService : BBDService){

  }

  ngOnInit(): void {
  this.token = localStorage.getItem('Token');
  this.DonarId = localStorage.getItem('DonarId');

  this.getBloodDonationByDonarId();
}


  getBloodDonationByDonarId(){
    this.BBDService.getBloodDonationsByDonarId(this.token,this.DonarId).subscribe((data:any)=>{
      this.BloodDonationHistory = data;
      console.log(data);
    })
  }

}
