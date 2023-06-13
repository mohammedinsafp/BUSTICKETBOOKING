import { Component } from '@angular/core';
import { Schedule } from '../model/schedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  schedules = [
    {
      route: 'Route 1',
      departureTime: '8:00 AM',
      arrivalTime: '11:00 AM',
      availability: 10
    },
    {
      route: 'Route 2',
      departureTime: '10:00 AM',
      arrivalTime: '1:00 PM',
      availability: 5
    },
    {
      route: 'Route 3',
      departureTime: '12:00 PM',
      arrivalTime: '3:00 PM',
      availability: 8
    }
    // Add more objects for additional schedules
  ];
bookTicket(schedule:Schedule){
  console.log('Booking ticket for:', schedule);
}


}
