import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbusComponent } from './addbus/addbus.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeletebusComponent } from './deletebus/deletebus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainhomepageComponent } from './mainhomepage/mainhomepage.component';
import { PassengerdetailsComponent } from './passengerdetails/passengerdetails.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { SeatavailabilityComponent } from './seatavailability/seatavailability.component';
import { SignupComponent } from './signup/signup.component';
import { UpdatebusComponent } from './updatebus/updatebus.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
