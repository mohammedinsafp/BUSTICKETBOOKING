import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bus } from './model/bus';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  loginUrl!:string;
  signupUrl!:string;
  getUrl!:string;
  deleteUrl!:string
  addbusUrl!:string;
  updateUrl!:string;
  constructor(private http:HttpClient) {
    this.signupUrl="http://localhost:8080/user";
    this.loginUrl="http://localhost:8080/login";
    this.getUrl="http://localhost:8080/users";
    this.addbusUrl="http://localhost:8080/bus";
    this.deleteUrl="http://localhost:8080/bus";
    this.updateUrl="http://localhost:8080/bus";
   }
     signupok(user:User):Observable<any>{
       return this.http.post(this.signupUrl,user)
     }
     loginok(user : User):Observable<any>{
      return this.http.post<any>(this.loginUrl,user);
     }
    addbusok(bus:Bus):Observable<any>{
      return this.http.post(this.addbusUrl,bus);
    }
    deleteDataById(id:string): Observable<void> {
      return this.http.delete<void>(`${this.deleteUrl}/${id}`);
    }
    updateBusByEngineNumber(engineNumber: string, updatedBus: Bus): Observable<any> {
      return this.http.put(`${this.updateUrl}/${engineNumber}`, updatedBus);
    }
  }
