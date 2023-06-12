
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    email:string='';
    name:string= '';
    password:string='';
    mobile:string='';
    role:string="user";
 user:User=new User();
  constructor(private service:ServiceService,private router: Router) { }
  signup(){
    this.user.email=this.email;
    this.user.name=this.name;
    this.user.password=this.password;
    this.user.mobile=this.mobile;
    this.user.role=this.role;
    this.service.signupok(this.user) .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/login']);
      }
      );
      alert("Account Created")
    }
}

