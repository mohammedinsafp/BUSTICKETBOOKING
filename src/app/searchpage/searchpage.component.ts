import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BusDto } from '../model/bus-dto';
import { Schedule } from '../model/schedule';
import { Seat } from '../model/seat';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent {
  fareOfSchedule: number=0;
  seat: Seat[]=[];
  errorMessage: string='';
  constructor(private demosearch:ServiceService){
    this.getDropdownValues();
  }
  
  textbox1: string='';
  textbox2: string='';
  textbox3: string='';
  schedules: Schedule[]=[];
  busDto: BusDto[]=[];
  dropdownValues: string[]=[];
  fare:number[]=[];
  showTable: boolean = false;
  

  getDropdownValues(): void {
    this.demosearch.getDropdownValues().subscribe(
      (values: string[]) => {
        this.dropdownValues = values;
      },
      (error: any) => {
        console.log('Error fetching dropdown values:', error);
      }
    );}
    setfare(f:number)

    {

      this.fareOfSchedule=f

    }
  search(): void {
    this.schedules=[];
    this.showTable = true;
    this.demosearch.search(this.textbox1, this.textbox2, this.textbox3).subscribe(
      (response: any) => {
        if (Array.isArray(response)) {
          this.schedules = response;
        } else {
          console.log("Invalid response format");
        }
      },
      (error) => {
        console.error(error);
      }
    );

      }

      searchbus(): void {
        this.busDto=[]
        this.demosearch.searchbus(this.textbox1, this.textbox2, this.textbox3).subscribe(
          (response: any) => {
            if (Array.isArray(response)) {
              this.busDto = response;
            } else {
              console.log("Invalid response format");
            }
          },
          (error) => {
            console.error(error);
          }
        );
    
          }
          getfare(): void {
            
            this.fare=[];
            
            this.demosearch.getfare(this.textbox1, this.textbox2, this.textbox3).subscribe(
              (response: any) => {
                if (Array.isArray(response)) {
                  this.fare = response as  number[];
                } else {
                  console.log("Invalid response format");
                }
              },
              (error) => {
                console.error(error);
              }
            );
        
              }
              getseats(s:number): void {

           

                this.seat=[];

                this.demosearch.scheduleId=s

                this.errorMessage=''  

                this.demosearch.getseats(s).subscribe(

                  (response: any) => {

                    if (Array.isArray(response)) {

                      this.seat = response as  Seat[];

                      console.log(this.seat)

                      this.demosearch.seat=this.seat;

                      // this.callProcessSeats()

                    } else {

                      console.log("Invalid response format");

                    }

                  },

                  (error) => {

                    console.error(error);

                    this.errorMessage = "SEAT NOT FOUND";

                  }

                );

           

                  }

        set(){

          this.demosearch.fare=this.fareOfSchedule;

          this.demosearch.date=this.textbox1;          

          this.demosearch.fhault=this.textbox2;

          this.demosearch.thault=this.textbox3;

         

        }
}