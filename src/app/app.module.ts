import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DonorComponent } from './donor/donor.component';
import { DonorRegistrationComponent } from './donor/donor-registration/donor-registration.component';
import { DonorDashboardComponent } from './donor/donor-dashboard/donor-dashboard.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BloodBankComponent } from './blood-bank/blood-bank.component';
import { DataTablesModule } from "angular-datatables";
const router:Routes=[
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'donor',component:DonorComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'donor-registration-form',component:DonorRegistrationComponent},
  {path:'donorDashboard',component:DonorDashboardComponent},
  {path:'blood-bank',component:BloodBankComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DonorComponent,
    DonorRegistrationComponent,
    DonorDashboardComponent,
    SignUpComponent,
    BloodBankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(router),
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
