import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bus } from './model/bus';
import { BusDto } from './model/bus-dto';
import { Schedule } from './model/schedule';
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
  s1:Schedule[]=[];
  s2:BusDto[]=[];
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
    search(date: string, source: string, dest: string) {
      return this.http.get(`http://localhost:8082/api/v1/schedules/schedule/${date}/${source}/${dest}`);
    }
    searchbus(date: string, source: string, dest: string) {
      return this.http.get(`http://localhost:8082/api/v1/schedules/schedule/bus/${date}/${source}/${dest}`);
    }
  }
