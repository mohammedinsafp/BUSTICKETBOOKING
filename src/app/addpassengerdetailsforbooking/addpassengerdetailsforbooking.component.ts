import { Component } from '@angular/core';

@Component({
  selector: 'app-addpassengerdetailsforbooking',
  templateUrl: './addpassengerdetailsforbooking.component.html',
  styleUrls: ['./addpassengerdetailsforbooking.component.css']
})
export class AddpassengerdetailsforbookingComponent {
  passengers: any[] = [];
  constructor() {
    this.passengers = Array(4);
  }

  addPassenger() {
    this.passengers.push({
      name: '',
      age: null,
      gender: 'male'
    });
  }

  submitForm() {
    // Perform any necessary form submission logic
    console.log(this.passengers);
  }
}
