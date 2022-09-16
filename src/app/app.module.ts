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
import { DonorModule } from './donor/donor.module';


const router:Routes=[
  {path:'',component:IndexComponent,children:[
    {path:'',component:HomeComponent},
    {path:'donor-registration-form',component:DonorRegistrationComponent},
    {path:'need-blood-form',component:NeedBloodComponent},
    {path:'donor-login',component:LoginComponent},
    {path:'admin-login',component:AdminLoginComponent},
      ]},
      {path:'donor',
      loadChildren:()=>import('./donor/donor.module')
      .then((m)=>m.DonorModule)
      },
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
    IndexComponent,
    AdminLoginComponent,
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
