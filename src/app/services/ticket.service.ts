import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../interfaces/ticket';
@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080/api/"

  getTicketByUserId(userId: number): Observable<number> {
    return this.http.get<number>(this.url + "tickets/" + userId)
  }

  pageTicket(body: {employeeId: number; min:number; max:number}) : Observable<Ticket[]> {
    return this.http.post<Ticket[]>(this.url + "ticket/ricerca", body);
  }

  // loginEmployee(body: { email: string; password: string }): Observable<Employee> {
  //   return this.http.post<Employee>("http://localhost:8080/api/login", body);
  // }



}
