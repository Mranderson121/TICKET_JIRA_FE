import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Storico } from '../interfaces/storico';

@Injectable({
  providedIn: 'root'
})

export class StoricoService {

  url="http://localhost:8080/api/"

  constructor(private http: HttpClient) {}

  getStoricoTaskByIdTask(ticketId:number):Observable<Storico[]>{

  return this.http.get<Storico[]>(this.url+"storico/"+ticketId)

  }
}
