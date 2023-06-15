import { Component } from '@angular/core';

@Component({
  selector: 'app-seatavailability',
  templateUrl: './seatavailability.component.html',
  styleUrls: ['./seatavailability.component.css']
})
export class SeatavailabilityComponent {
  seats: any[];

  constructor() {
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
    } else {
      this.seats[index] = 'available';
    }
  }
  
  isBooked(seat: any) {
    return seat === 'temporarily-booked';
  }
}
