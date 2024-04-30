import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  loginEmployee(body: { email: string; password: string }): Observable<Employee> {
    return this.http.post<Employee>("http://localhost:8080/api/login", body);
  }
  
}
