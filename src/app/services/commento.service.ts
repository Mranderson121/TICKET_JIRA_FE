import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commento } from '../interfaces/commento';

@Injectable({
  providedIn: 'root'
})
export class CommentoService {

  url = "http://localhost:8080/api/"

  constructor(private http: HttpClient) { }

  getCommentiByTaskId(ticketId:number):Observable<Commento[]>{
    return this.http.get<Commento[]>(this.url + "commento/" + ticketId )

  }


}
