import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { SeatavailabilityComponent } from './seatavailability/seatavailability.component';
import { PassengerdetailsComponent } from './passengerdetails/passengerdetails.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { AddbusComponent } from './addbus/addbus.component';
import { UpdatebusComponent } from './updatebus/updatebus.component';
import { DeletebusComponent } from './deletebus/deletebus.component';
import { FormsModule } from '@angular/forms';

import { ServiceService } from './service.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DashboardComponent,
    SearchpageComponent,
    SeatavailabilityComponent,
    PassengerdetailsComponent,
    AdminhomepageComponent,
    AddbusComponent,
    UpdatebusComponent,
    DeletebusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
