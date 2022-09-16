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
import { IndexComponent } from './index/index.component';
import { AdminModule } from './admin/admin.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DonorComponent } from './donor/donor.component';
import { DonorDashboardComponent } from './donor/Components/donor-dashboard/donor-dashboard.component';
import { BloodDonationFormComponent } from './donor/Components/blood-donation-form/blood-donation-form.component';
import { DonationHistoryComponent } from './donor/Components/donation-history/donation-history.component';
import { DonorModule } from './donor/donor.module';


const router:Routes=[
  {path:'',component:IndexComponent,children:[
    {path:'',component:HomeComponent},
    {path:'donor-registration-form',component:DonorRegistrationComponent},
    {path:'need-blood-form',component:NeedBloodComponent},
    {path:'login',component:LoginComponent},
    {path:'donor-dashboard',component:DonorDashboardComponent},
    {path:'blood-donation-form',component:BloodDonationFormComponent},
    {path:'donation-history',component:DonationHistoryComponent},
    {path:'admin-login',component:AdminLoginComponent},
    {path:'donor',component:DonorComponent}
      ]},
  {path:'admin',
    loadChildren:()=> import('./admin/admin.module')
    .then((m) => m.AdminModule)
}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DonorRegistrationComponent,
    NeedBloodComponent,
    LoginComponent,
    BloodDonationFormComponent,
    DonationHistoryComponent,
    IndexComponent,
    AdminLoginComponent,
    DonorComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(router),
    DataTablesModule,
    ReactiveFormsModule,
    AdminModule,
    DonorModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
