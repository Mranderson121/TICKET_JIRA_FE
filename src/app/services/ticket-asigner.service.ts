import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class TicketAsignerService {

  constructor(private http: HttpClient) { }

  getAllEmployees(url: string): Observable<Employee[]> {
    return this.http.get<any>(url)  
  }
}

