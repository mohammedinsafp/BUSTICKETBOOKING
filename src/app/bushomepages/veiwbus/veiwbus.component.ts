import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Bus } from 'src/app/model/bus';

import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-veiwbus',
  templateUrl: './veiwbus.component.html',
  styleUrls: ['./veiwbus.component.css']
})
export class VeiwbusComponent {
  selectedBus!: Bus;
  busId!:number;
	busNo!:number;
	regNo:string='';
	engineNo:string='';
	busType:string='';
	busName:string='';
	totalSeats:string='';
  bus:Bus[]=[];
  addbus:Bus=new Bus();
  updatedBus: Bus = new Bus();

  constructor(private service:ServiceService,private router: Router) {
    this.viewbus()
   }
addbusOk(){
    this.addbus.busName=this.busName;
    this.addbus.busType=this.busType;
    this.addbus.regNo=this.regNo;
    this.addbus.totalSeats=this.totalSeats;
    this.addbus.engineNo=this.engineNo;
    this.service.addbusok(this.addbus).subscribe(
      response => {
        console.log(response);
        alert("Bus Added")
      },
      error => {
      console.error('Failed to add bus:', error);
      }
      );
      
    }
    updateBus() {
      this.updatedBus.busId=this.busId;
      this.updatedBus.regNo=this.regNo;
      this.updatedBus.busType=this.busType;
      this.updatedBus.busName=this.busName;
      this.updatedBus.totalSeats=this.totalSeats;
      this.updatedBus.engineNo=this.engineNo;
      this.service.updateBusById(this.updatedBus)
      .subscribe(
        response => {
        console.log('Bus updated successfully:', response);
        this.router.navigate(['/viewbus']).then(() => {
          window.location.reload();
        });
        // Handle any additional logic or UI updates here
        },
        error => {
        console.error('Failed to update bus:', error);
        // Handle error scenarios here
        }
      );
    }
    viewbus(){
      this.service.getAllbus()
      .subscribe(
        response => {
        console.log( response);
          this.bus=response
        // alert("Bus updated successfully");
        // Handle any additional logic or UI updates here
        },
        error => {
        console.error('Failed to update bus:', error);
        // Handle error scenarios here
        }
      );
    }
    
    delete(bus:Bus){
      this.service.deleteDataById(bus.busId).subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['/viewbus']).then(() => {
            window.location.reload();
          });
        }
      );
    }
    loadEditForm(busItem: Bus): void {
      this.busId = busItem.busId;
      this.busName = busItem.busName;
      this.totalSeats = busItem.totalSeats;
      this.regNo = busItem.regNo;
      this.engineNo = busItem.engineNo;
      this.busType = busItem.busType;
    }
  }

