import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/employee';
import { Stato } from '../interfaces/stato';

@Injectable({
  providedIn: 'root'
})
export class TicketAsignerService {

  url = "http://localhost:8080/api/ticket"

  constructor(private http: HttpClient) { }

  getAllEmployees(url: string): Observable<Employee[]> {
    return this.http.get<any>(url)  
  }

  createTicket(body: {taskName: string, taskDesc: string, assegnatarioId: number, employeeId: number, stato: Stato}) {
    return this.http.post<any>(this.url, body)
  }
}

