import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080/api/tickets/"

  getTicketByUserId(userId: number): Observable<number> {
    return this.http.get<number>(this.url + userId)
  }
}
