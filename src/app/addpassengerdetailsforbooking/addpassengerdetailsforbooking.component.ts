import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-addpassengerdetailsforbooking',
  templateUrl: './addpassengerdetailsforbooking.component.html',
  styleUrls: ['./addpassengerdetailsforbooking.component.css']
})
export class AddpassengerdetailsforbookingComponent {
  passengers: any[] = [];
  numofseats:number=this.service.numofseats;
  constructor(private service:ServiceService,private router:Router) {
    this.passengers = Array(this.numofseats);
  }

  addPassenger() {
    this.passengers.push({
      name: '',
      age: null,
      gender: ''
    });
  }

  submitForm() {
    // Perform any necessary form submission logic
    console.log(this.passengers);
  }
}
