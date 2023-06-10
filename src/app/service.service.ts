import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  loginUrl!:string;
  signupUrl!:string;
  constructor(private http:HttpClient) {
    this.signupUrl="http://localhost:8080/user";
    this.loginUrl="http://localhost:8080/login";
   }
     signupok(user:User):Observable<any>{
       return this.http.post(this.signupUrl,user)
     }
     loginok(user : User):Observable<any>{
      return this.http.post<any>(this.loginUrl,user);
     }
  }
