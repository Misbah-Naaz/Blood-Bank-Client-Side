import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';

const donor:Routes=[
  {path:'dashboard',component:DashboardComponent}

]

@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(donor)
  ]
})
export class DonorDashboardModule { }
