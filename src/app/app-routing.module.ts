import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbusComponent } from './buspages/addbus/addbus.component';
import { AddscheduleComponent } from './schedulepages/addschedule/addschedule.component';
import { AdminhomepageComponent } from './buspages/Busadminhomepage/adminhomepage.component';
import { DashboardComponent } from './buspages/dashboard/dashboard.component';
import { DeletebusComponent } from './buspages/deletebus/deletebus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainhomepageComponent } from './Adminhomepage/mainhomepage.component';
import { PassengerdetailsComponent } from './passengerdetails/passengerdetails.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { SeatavailabilityComponent } from './seatavailability/seatavailability.component';
import { SignupComponent } from './signup/signup.component';
import { UpdatebusComponent } from './buspages/updatebus/updatebus.component';
import { ShedulehomepageComponent } from './schedulepages/shedulehomepage/shedulehomepage.component';
import { UpdatescheduleComponent } from './schedulepages/updateschedule/updateschedule.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"seatavailability",
    component:SeatavailabilityComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"deletebus",
    component:DeletebusComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"addbus",
    component:AddbusComponent
  },
  {
    path:"buspage",
    component:AdminhomepageComponent
  },
  {
    path:"passengerdetails",
    component:PassengerdetailsComponent
  },
  {
    path:"updatebus",
    component:UpdatebusComponent
  },
  {
    path:"searchpage",
    component:SearchpageComponent
  },
  {
    path:"mainhomepage",
    component:MainhomepageComponent
  },
  {
    path:"schedulepage",
    component:ScheduleComponent
  },
  {
    path:"addschedule",
    component:AddscheduleComponent
  },
  {
    path:"schedulehomepage",
    component:ShedulehomepageComponent
  },
  {
    path:"buspages",
    component:UpdatescheduleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
