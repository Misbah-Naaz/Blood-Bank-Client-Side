import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DonorDetailsComponent } from './components/donor-details/donor-details.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BloodStackComponent } from './components/blood-stack/blood-stack.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

const adminrouter:Routes=[
  {path:'admin',component:AdminComponent,children:[
    {path:'sidebar',component:SidebarComponent},
    {path:'dashboard',component:AdminDashboardComponent},
    {path:'donor-details',component:DonorDetailsComponent},
    {path:'patient-details',component:PatientDetailsComponent},
    {path:'blood-stack',component:BloodStackComponent}
  ]}
]

@NgModule({
  declarations: [
    AdminDashboardComponent,
    DonorDetailsComponent,
    PatientDetailsComponent,
    AdminComponent,
    SidebarComponent,
    BloodStackComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DataTablesModule,
    RouterModule.forChild(adminrouter)
  ]
})
export class AdminModule { }
