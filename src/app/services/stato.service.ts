import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stato } from '../interfaces/stato';

@Injectable({
  providedIn: 'root'
})
export class StatoService {

  url = "http://localhost:8080/api"

  constructor(private http: HttpClient) { }

  getAllStati():Observable<Stato[]>{
    return this.http.get<Stato[]>(this.url + "/stati")
  }

}
