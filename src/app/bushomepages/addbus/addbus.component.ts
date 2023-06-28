import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../../model/bus';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-addbus',
  templateUrl: './addbus.component.html',
  styleUrls: ['./addbus.component.css']
})
export class AddbusComponent {
  busId!:number;
	regNo:string='';
	engineNo:string='';
	busType:string='';
	busName:string='';
	totalSeats:string='';
  bus:Bus=new Bus();
  constructor(private service:ServiceService,private router: Router) { }
addbus(){
    this.bus.busId=this.busId;
    this.bus.busName=this.busName;
    this.bus.busType=this.busType;
    this.bus.regNo=this.regNo;
    this.bus.totalSeats=this.totalSeats;
    this.bus.engineNo=this.engineNo;
    this.service.addbusok(this.bus).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/viewbus']);
      }
      );
      alert("Bus Added")
    }

}

