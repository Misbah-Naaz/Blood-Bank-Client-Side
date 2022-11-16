import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DonorDashboardComponent } from './Components/donor-dashboard/donor-dashboard.component';
import { BloodDonationFormComponent } from './Components/blood-donation-form/blood-donation-form.component';
import { DonationHistoryComponent } from './Components/donation-history/donation-history.component';
import { DonorComponent } from './donor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { AccessServicesService } from '../Services/access-services.service';
import { TodaysDonationComponent } from './Components/todays-donation/todays-donation.component';

const donorrouter:Routes=[
  {path:'donor',
  canActivate:[AccessServicesService],
  component:DonorComponent,children:
  [
    {path:'',component:DonorDashboardComponent},
    {path:'donor-dashboard',component:DonorDashboardComponent},
    {path:'sidebar',component:SidebarComponent},
    {path:'blood-donation-form',component:BloodDonationFormComponent},
    {path:'donation-history',component:DonationHistoryComponent},
    {path:'today-donation',component:TodaysDonationComponent}
  ]
  }
]

@NgModule({
  declarations: [
    DonorComponent,
    DonorDashboardComponent,
    BloodDonationFormComponent,
    DonationHistoryComponent,
    SidebarComponent,
    TodaysDonationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(donorrouter)
  ]
})
export class DonorModule { }
