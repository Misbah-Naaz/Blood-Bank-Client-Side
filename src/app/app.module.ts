import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DonorComponent } from './donor/donor.component';
import { DonorRegistrationComponent } from './donor/donor-registration/donor-registration.component';
import { DonorDashboardComponent } from './donor/donor-dashboard/donor-dashboard.component';
const router:Routes=[
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'donor',component:DonorComponent},
  {path:'donor-registration-form',component:DonorRegistrationComponent},
  {path:'donorDashboard',component:DonorDashboardComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DonorComponent,
    DonorRegistrationComponent,
    DonorDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
