import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
user:User=new User();

constructor(private service:ServiceService,private router: Router) { 
  
}
login(){
  this.user.name=this.name;
  this.user.password=this.password;
  this.service.loginok(this.user).subscribe(
    data => {
      console.log(data);
      this.router.navigate(['/searchpage']);
  })
}
}
