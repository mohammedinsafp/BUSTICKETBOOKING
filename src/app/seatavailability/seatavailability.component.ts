import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-seatavailability',
  templateUrl: './seatavailability.component.html',
  styleUrls: ['./seatavailability.component.css']
})
export class SeatavailabilityComponent {
  seats: any[];
  seatNo:number=0
  
  constructor(private service:ServiceService) {
    this.seats = Array(40).fill('available');
    this.seats[2] = 'booked';
    this.seats[5] = 'booked';
    this.seats[15] = 'booked';
    this.seats[17] = 'booked';
    
  }
  
  toggleSeatStatus(index: number) {
    if (this.seats[index] === 'booked') {
      // Seat is already booked, do nothing
      return;
    }
    if (this.seats[index] === 'available') {
      this.seats[index] = 'temporarily-booked';
      if(this.seatNo>=5)
      {
        alert("Maximum 5 seats")
        this.seats[index] = 'available';
        this.seatNo=this.seatNo-1
      }
      this.seatNo=this.seatNo+1
    } else {
      this.seats[index] = 'available';
      this.seatNo=this.seatNo-1
    }
  }
  
  isBooked(seat: any) {
    return seat === 'temporarily-booked';
  }
  noofseats(){
    this.service.numofseats=this.seatNo
  }
}
