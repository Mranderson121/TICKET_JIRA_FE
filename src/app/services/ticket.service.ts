import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../interfaces/ticket';
import { Stato } from '../interfaces/stato';
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

  getTicketById(ticketId:number) : Observable<Ticket> {
    return this.http.get<Ticket>(this.url + "ticket/singolo/" + ticketId)
  }

  updateTicket(body: {ticketId: number, newDesk: string, newState: Stato}): Observable<Ticket> {
    return this.http.put<any>(this.url + "ticket", body)
  }
}
