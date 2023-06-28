import { HttpErrorResponse } from '@angular/common/http';
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
  role:string='';
  user:User=new User();
// user1:User[]=[];
constructor(private service:ServiceService,private router: Router) { 
}
togglePasswordVisibility() {
  const passwordInput = document.getElementById('password') as HTMLInputElement | null;
  if (passwordInput) {
    if (passwordInput.getAttribute('type') === 'password') {
      passwordInput.setAttribute('type', 'text');
    } else {
      passwordInput.setAttribute('type', 'password');
    }
  }
}
login(){
  var nameElement = document.getElementById("name") as HTMLInputElement;
  var passwordElement = document.getElementById("password") as HTMLInputElement;
  var errorMessagesElement = document.getElementById("errorMessages");

  if (nameElement && passwordElement && errorMessagesElement) {
    var name = nameElement.value;
    var password = passwordElement.value;
  
    if (name === "" || password === "") {
      errorMessagesElement.innerHTML = "Please fill in all required fields.";
      return;
    }
  
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!password.match(passwordRegex)) {
      errorMessagesElement.innerHTML = "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one digit.";
      return;
    }
  
    this.user.name = name;
    this.user.password = password;
  
    this.service.loginok(this.user).subscribe(
      (data: User) => {
        if (data.role === "user") {
          this.router.navigate(['/searchpage']);
        } else if (data.role === "admin") {
          this.router.navigate(['/mainhomepage']);
        }
      },
      (error: HttpErrorResponse) => {
        if (error.status === 401) {
          alert('Invalid credentials');
        }
      }
    );
  }
}
}
