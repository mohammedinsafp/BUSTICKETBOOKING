import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './buspages/dashboard/dashboard.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { SeatavailabilityComponent } from './seatavailability/seatavailability.component';
import { PassengerdetailsComponent } from './passengerdetails/passengerdetails.component';
import { AdminhomepageComponent } from './buspages/Busadminhomepage/adminhomepage.component';
import { AddbusComponent } from './buspages/addbus/addbus.component';
import { UpdatebusComponent } from './buspages/updatebus/updatebus.component';
import { DeletebusComponent } from './buspages/deletebus/deletebus.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './service.service';
import { HttpClientModule } from '@angular/common/http';
import { MainhomepageComponent } from './Adminhomepage/mainhomepage.component';
import { AddscheduleComponent } from './schedulepages/addschedule/addschedule.component';
import { UpdatescheduleComponent } from './schedulepages/updateschedule/updateschedule.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { BusComponent } from './buspages/bus/bus.component';
import { ShedulehomepageComponent } from './schedulepages/shedulehomepage/shedulehomepage.component';

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
    DeletebusComponent,
    MainhomepageComponent,
    AddscheduleComponent,
    UpdatescheduleComponent,
    ScheduleComponent,
    BusComponent,
    ShedulehomepageComponent
   
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
