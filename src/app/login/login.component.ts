import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Schedule } from '../model/schedule';
import { User } from '../model/user';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string='';
  name:string= '';
  password:string='';
  mobile:string='';
  role:string='';
user:User=new User();
// user1:User[]=[];
constructor(private service:ServiceService,private router: Router) { 
}
login(){
  this.user.name=this.name;
  this.user.password=this.password;
  this.service.loginok(this.user).subscribe(
    (data:User) => {
      // console.log(data);
      if(data.role==="user"){
        this.router.navigate(['/searchpage']);
      }
      else if(data.role==="admin"){
              this.router.navigate(['/mainhomepage']);
            }
        },
        (error: HttpErrorResponse) => { // Add error parameter and handle the error here
          if (error.status === 401) {
            alert('Invalid credentials');
          }
  })}
}
