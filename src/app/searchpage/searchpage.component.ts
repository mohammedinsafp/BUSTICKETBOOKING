import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BusDto } from '../model/bus-dto';
import { Schedule } from '../model/schedule';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent {
  textbox1!:string;
  textbox2!:string;
  textbox3!:string;
  constructor(private demosearch:ServiceService,private router: Router){}
  search() {
    this.demosearch.search(this.textbox1, this.textbox2, this.textbox3)
      .subscribe(
        (response: any) => {
          // Handle the response from the API
          if (Array.isArray(response)) {
            this.demosearch.s1 = response as Schedule[];
          } 
          this.router.navigate(['/schedulepage']);
          // else {
          //   console.log("Invalid response format");
          // }
        }
        // ,
        // (error) => {
        //   // Handle any errors
        //   console.log("hai");
        //   console.error(error);
        // }
      );
}
searchbus() {
  this.demosearch.searchbus(this.textbox1, this.textbox2, this.textbox3)
    .subscribe(
      (response: any) => {
        // Handle the response from the API
        if (Array.isArray(response)) {
          this.demosearch.s2 = response as BusDto[];
        }
        this.router.navigate(['/schedulepage']);
        //  else {
        //   console.log("Invalid response format");
        // }
      }
      //,
      // (error) => {
      //   // Handle any errors
      //   console.log("hai");
      //   console.error(error);
      // }
    );
}
}