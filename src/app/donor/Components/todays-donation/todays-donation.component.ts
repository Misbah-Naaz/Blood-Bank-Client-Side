import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { BBDService } from 'src/app/Services/bbd.service';
import { BloodDonations } from 'src/Models/BloodDonations';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todays-donation',
  templateUrl: './todays-donation.component.html',
  styleUrls: ['./todays-donation.component.css']
})
export class TodaysDonationComponent implements OnInit {
token:any;
Donorid!:string;
DonarName!:string;
todaysDate:Date=new Date()
todaysDonation:BloodDonations[]=[];
  constructor(private bbd:BBDService) { }
  ngOnInit(): void {
    this.Donorid= localStorage.getItem('DonarId')!;
    this.DonarName=localStorage.getItem('DonarName')!;
    this.token=localStorage.getItem('Token');
    this.getTodaysDonation();
  }
  getTodaysDonation()
  {
    this.bbd.getBloodDonationsByDonarId(this.token,this.Donorid).subscribe((data:any)=>
    {
      console.log(data);
      this.todaysDonation=data.filter((element:any)=>{
        // First converting the date to a specific format
      let date = new Date(element.donationDate).toLocaleDateString();
      let Today = new Date(this.todaysDate).toLocaleDateString();
      // then matching them 
        return date == Today;
      })
      console.log(this.todaysDonation)
    })
  }
  viewDetail(data:any)
  {
    console.log(data)
  }
  continueDonation(donation:BloodDonations)
  {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Did you Complete Donation?',
      icon: 'question',
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonText: 'Yes, I Did!',
      cancelButtonText: 'No, I Will!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
       
        this.bbd.completeDonation(this.token,donation,donation.bloodDonationId).subscribe((data:any)=>
        {
          console.log(data);
          swalWithBootstrapButtons.fire(
            'Thank You!',
            'For Your Donation.',
            'success'
          )
        })
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          '',
          'Please Complete Your Donation :)',
          'info'
        )
      }
    })
  }
}
