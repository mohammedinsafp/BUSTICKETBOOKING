import { Component } from '@angular/core';
import { Bus } from '../../model/bus';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-updatebus',
  templateUrl: './updatebus.component.html',
  styleUrls: ['./updatebus.component.css']
})
export class UpdatebusComponent {
  busId!:number;
	regNo:string='';
	engineNo:string='';
	busType:string='';
	busName:string='';
	totalSeats:string='';
	updatedBus: Bus = new Bus(); // An instance of the Bus class to hold the updated bus data

	constructor(private serviceService: ServiceService) {}
  
	updateBus() {
		this.updatedBus.regNo=this.regNo;
		this.updatedBus.busType=this.busType;
		this.updatedBus.busName=this.busName;
		this.updatedBus.totalSeats=this.totalSeats;
		this.updatedBus.engineNo=this.engineNo;
	  this.serviceService.updateBusById( this.updatedBus)
		.subscribe(
		  response => {
			console.log('Bus updated successfully:', response);
			alert("Bus updated successfully");
			// Handle any additional logic or UI updates here
		  },
		  error => {
			console.error('Failed to update bus:', error);
			// Handle error scenarios here
		  }
		);
	}
}