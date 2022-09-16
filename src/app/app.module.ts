import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataTablesModule } from "angular-datatables";
import { ReactiveFormsModule } from '@angular/forms';
import { DonorRegistrationComponent } from './donor-registration/donor-registration.component';
import { NeedBloodComponent } from './need-blood/need-blood.component';
import { LoginComponent } from './login/login.component';
import { DonorDashboardComponent } from './donor-dashboard/donor-dashboard.component';
import { BloodDonationFormComponent } from './blood-donation-form/blood-donation-form.component';
import { DonationHistoryComponent } from './donation-history/donation-history.component';
import { DonorDashboardModule } from './donor-dashboard/donor-dashboard.module';
import { SidebarComponent } from './donor-dashboard/components/sidebar/sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin/components/admin-dashboard/admin-dashboard.component';
import { DonorDetailsComponent } from './admin/components/donor-details/donor-details.component';
import { PatientDetailsComponent } from './admin/components/patient-details/patient-details.component';


const router:Routes=[
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'donor-registration-form',component:DonorRegistrationComponent},
  {path:'need-blood-form',component:NeedBloodComponent},
  {path:'login',component:LoginComponent},
  {path:'donor-dashboard',component:DonorDashboardComponent},
  {path:'blood-donation-form',component:BloodDonationFormComponent},
  {path:'donation-history',component:DonationHistoryComponent},
  {path:'admin',component:AdminComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent, children:[
  {path:'donor-details',component:DonorDetailsComponent},
  {path:'patient-details',component:PatientDetailsComponent}
  ]},

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DonorRegistrationComponent,
    NeedBloodComponent,
    LoginComponent,
     DonorDashboardComponent,
    BloodDonationFormComponent,
    DonationHistoryComponent,
    AdminComponent,
    AdminDashboardComponent,
    DonorDetailsComponent,
    PatientDetailsComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(router),
    DataTablesModule,
    ReactiveFormsModule,
    DonorDashboardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
