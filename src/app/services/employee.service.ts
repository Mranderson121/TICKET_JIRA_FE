import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  loginEmployee(url: string, body: {}) {
    return this.http.post(url, body)
  }
  
}
