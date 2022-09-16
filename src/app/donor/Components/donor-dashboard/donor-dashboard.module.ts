import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { BloodDonationFormComponent } from '../blood-donation-form/blood-donation-form.component';
import { DonationHistoryComponent } from '../donation-history/donation-history.component';

const donor:Routes=[
  {path:'dashboard',component:DashboardComponent,children:
  [
   
  {path:'blood-donation-form',component:BloodDonationFormComponent},
  {path:'donation-history',component:DonationHistoryComponent},
  ]
}

]

@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(donor)
  ]
})
export class DonorDashboardModule { }
