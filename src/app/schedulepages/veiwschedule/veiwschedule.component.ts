import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Schedule } from 'src/app/model/schedule';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-veiwschedule',
  templateUrl: './veiwschedule.component.html',
  styleUrls: ['./veiwschedule.component.css']
})
export class VeiwscheduleComponent {
  scheduleId: number =0;
  date: string='';
  departureTime: string ='';
  arrivalTime: string ='';
  routeId: number =0;
  busId: number =0;
  selectedBusSchedule!: Schedule;
  busSchedules: Schedule[] = [];
addBusSchedule: Schedule = new Schedule();
updatedBusSchedule: Schedule = new Schedule();
constructor(private service: ServiceService, private router: Router) {
  this.viewBusSchedules();
}

addBusScheduleOk() {
  this.addBusSchedule.busId = this.busId;
  this.addBusSchedule.arrivalTime = this.arrivalTime;
  this.addBusSchedule.departureTime = this.departureTime;
  this.addBusSchedule.date = this.date;
  this.addBusSchedule.routeId = this.routeId;
  this.addBusSchedule.scheduleId = this.scheduleId;
  
  this.service.addscheduleok(this.addBusSchedule).subscribe(
    response => {
      console.log(response);
      alert("Bus Schedule Added");
    },
    error => {
      console.error('Failed to add bus schedule:', error);
      // Handle error scenarios here
    }
  );
}
viewBusSchedules() {
  this.service.getAllschedule()
    .subscribe(
      response => {
        console.log(response);
        this.busSchedules = response;
      },
      error => {
        console.error('Failed to fetch bus schedules:', error);
        // Handle error scenarios here
      }
    );
}
loadEditForm(busScheduleItem: Schedule): void {
  this.scheduleId = busScheduleItem.scheduleId;
  this.arrivalTime = busScheduleItem.arrivalTime;
  this.busId = busScheduleItem.busId;
  this.date = busScheduleItem.date;
  this.departureTime = busScheduleItem.departureTime;
  this.routeId = busScheduleItem.routeId;
}
updateSchedule(){
  this.updatedBusSchedule.arrivalTime=this.arrivalTime;
  this.updatedBusSchedule.busId=this.busId;
  this.updatedBusSchedule.date=this.date;
  this.updatedBusSchedule.departureTime=this.departureTime;
  this.updatedBusSchedule.routeId=this.routeId;
  this.service.updateScheduleById(this.scheduleId, this.updatedBusSchedule)
  .subscribe(
    response => {
    console.log(response);
    this.router.navigate(['/viewschedule']).then(() => {
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


}
