import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';
import { TicketAsignerService } from 'src/app/services/ticket-asigner.service';

@Component({
  selector: 'app-ticket-assigner',
  templateUrl: './ticket-assigner.component.html',
  styleUrls: ['./ticket-assigner.component.css']
})
export class TicketAssignerComponent implements OnInit {

  employees!: Employee[]
  employeesUrl = "http://localhost:8080/api/employees"

  ngOnInit(): void {
    this.getAllEmployees()
  }

  constructor(private service: TicketAsignerService) { }

  getAllEmployees() {
    this.service.getAllEmployees(this.employeesUrl).subscribe(data=> {
      this.employees = data
      console.log(this.employees)
    })
  }

}
