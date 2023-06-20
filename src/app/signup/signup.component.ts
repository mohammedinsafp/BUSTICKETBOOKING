
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
    var nameElement = document.getElementById("name") as HTMLInputElement;
    var emailElement = document.getElementById("email") as HTMLInputElement;
    var passwordElement = document.getElementById("password") as HTMLInputElement;
    var phoneElement=document.getElementById("phone") as HTMLInputElement;
    var errorMessagesElement = document.getElementById("errorMessages");
  
    if (nameElement && emailElement && passwordElement && phoneElement && errorMessagesElement) {
      var name = nameElement.value;
      var email = emailElement.value;
      var password = passwordElement.value;
      var phone = phoneElement.value;
  
      if (name === "" || email === "" || password === "" || phone==="") {
        errorMessagesElement.innerHTML = "Please fill in all required fields.";
        return;
      }
  
      var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!email.match(emailRegex)) {
        errorMessagesElement.innerHTML = "Please enter a valid email address.";
        return;
      }
      var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      if (!password.match(passwordRegex)) {
        errorMessagesElement.innerHTML = "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one digit.";
        return ;
      }

      var phoneRegex = /^\d{10}$/;
      if (!phone.match(phoneRegex)) {
        errorMessagesElement.innerHTML = "Please enter a valid 10-digit phone number.";
        return ;
      }
    
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
}
