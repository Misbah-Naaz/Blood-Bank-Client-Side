import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataTablesModule } from "angular-datatables";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DonorRegistrationComponent } from './Registration/donor-registration.component';
import { NeedBloodComponent } from './need-blood/need-blood.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { AdminModule } from './admin/admin.module';
import { DonorModule } from './donor/donor.module';
import { BBDService } from './Services/bbd.service';
import { AccessServicesService } from './Services/access-services.service';
import { FooterComponent } from './footer/footer.component';
import { ForgotComponent } from './forgot/forgot.component';



const router:Routes=[
  {path:'',component:IndexComponent,children:[
    {path:'',component:HomeComponent},
    {path:'donor-registration-form',component:DonorRegistrationComponent},
    {path:'need-blood-form',component:NeedBloodComponent},
    {path:'login',component:LoginComponent},
    {path:'forgot',component:ForgotComponent},
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
 
    FooterComponent,
    ForgotComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(router),
    DataTablesModule,
    ReactiveFormsModule,
    FormsModule,
    AdminModule,
    DonorModule,
    HttpClientModule
    ],
  providers: [BBDService],
  bootstrap: [AppComponent]
})
export class AppModule { }
