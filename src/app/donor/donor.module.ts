import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DonorDashboardComponent } from './Components/donor-dashboard/donor-dashboard.component';
import { BloodDonationFormComponent } from './Components/blood-donation-form/blood-donation-form.component';
import { DonationHistoryComponent } from './Components/donation-history/donation-history.component';
import { DonorComponent } from './donor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './Components/sidebar/sidebar.component';

const donorrouter:Routes=[
  {path:'donor',component:DonorComponent,children:
  [
    {path:'donor-dashboard',component:DonorDashboardComponent},
    {path:'sidebar',component:SidebarComponent},
    {path:'blood-donation-form',component:BloodDonationFormComponent},
    {path:'donation-history',component:DonationHistoryComponent}
  ]
  }
]

@NgModule({
  declarations: [
    DonorComponent,
    DonorDashboardComponent,
    BloodDonationFormComponent,
    DonationHistoryComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(donorrouter)
  ]
})
export class DonorModule { }
