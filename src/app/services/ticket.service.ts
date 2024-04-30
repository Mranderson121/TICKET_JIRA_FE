import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../interfaces/ticket';
@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() { }

  // loginEmployee(body: { email: string; password: string }): Observable<Employee> {
  //   return this.http.post<Employee>("http://localhost:8080/api/login", body);
  // }

  // getTicketByUserId() : Observable<Ticket[]> {
  //     return this.http.get<Ticket[]>()
  // }




}
