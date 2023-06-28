import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bus } from './model/bus';
import { BusDto } from './model/bus-dto';
import { RequestDto } from './model/request-dto';
import { Schedule } from './model/schedule';
import { Seat } from './model/seat';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  s:Seat[]=[];
  fare: number=0;
  date: string='';
  seat: Seat[]=[];
  fhault: string='';
  thault: string='';
  numofseats: Array<number>=[];
  scheduleId: number=0;
  loginUrl!:string;
  signupUrl!:string;
  baseUrl!:string;
  getUrl!:string;
  deleteUrl!:string
  addbusUrl!:string;
  updateUrl!:string;
  updateScheduleUrl!:string;
  addscheduleUrl!:string;
  s1:Schedule[]=[];
  s2:BusDto[]=[];
  bus:Bus[]=[];
  
  constructor(private http:HttpClient) {
    this.signupUrl="http://localhost:8080/user";
    this.loginUrl="http://localhost:8080/login";
    this.getUrl="http://localhost:8080/users";
    this.addbusUrl="http://localhost:8081/api/v1/buses/bus";
    this.deleteUrl="http://localhost:8081/api/v1/buses/bus";
    this.updateUrl="http://localhost:8081/api/v1/buses/bus";
    this.updateScheduleUrl="http://localhost:8082/api/v1/schedules";
    this.addscheduleUrl="http://localhost:8082/api/v1/schedules/schedule/post";
    this.baseUrl="http://localhost:8082/api/v1/schedules"
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
    deleteDataById(id:number): Observable<void> {
      return this.http.delete<void>(`${this.deleteUrl}/${id}`);
    }
    updateBusById( updatedBus: Bus): Observable<any> {
      return this.http.put(this.updateUrl,updatedBus);
    }
    search(date: string, source: string, dest: string) {
      return this.http.get(`http://localhost:8082/api/v1/schedules/schedule/${date}/${source}/${dest}`);
    }
    searchbus(date: string, source: string, dest: string) {
      return this.http.get(`http://localhost:8082/api/v1/schedules/schedule/bus/${date}/${source}/${dest}`);
    }
    addscheduleok(schedule:Schedule):Observable<any>{
      return this.http.post(this.addscheduleUrl,schedule);
    }
    updateScheduleById(id: number, updatedSchedule: Schedule): Observable<any> {
      return this.http.put(`${this.updateScheduleUrl}/${id}`,updatedSchedule );
    }
    getfare(date: string, source: string, dest: string) {
      return this.http.get(`http://localhost:8082/api/v1/schedules/schedule/fare/${date}/${source}/${dest}`);
    }
    getDropdownValues(): Observable<string[]> {
      return this.http.get<string[]>('http://localhost:8081/api/v1/buses/routeDetails/all');
    }
    getseats(s: number): Observable<any> {
      return this.http.get(`http://localhost:8082/api/v1/schedules/seat/${s}`);
  }
  book(requestDto: RequestDto): Observable<any> {
      return this.http.post('http://localhost:8082/api/v1/bookings/booking',requestDto)
  }
  getAllbus():Observable<any>{
    return this.http.get('http://localhost:8081/api/v1/buses/bus')
  }
  getAllschedule():Observable<any>{
    return this.http.get('http://localhost:8082/api/v1/schedules/allSchedules')
  }
  updateSchedule(scheduleId: number, schedule: Schedule): Observable<Schedule> {
    const url = `${this.baseUrl}/${scheduleId}`;
    return this.http.put<Schedule>(url, schedule);
  }
  }
