import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/interfaces/employee';
import { Stato } from 'src/app/interfaces/stato';
import { TicketAsignerService } from 'src/app/services/ticket-asigner.service';

@Component({
  selector: 'app-ticket-assigner',
  templateUrl: './ticket-assigner.component.html',
  styleUrls: ['./ticket-assigner.component.css']
})
export class TicketAssignerComponent implements OnInit {

  employees!: Employee[]
  employeesUrl = "http://localhost:8080/api/employees"
  taskName!: string
  taskDesc!: string
  statoDefault: Stato = {
    stateId: 1,
    stateName: "da lavorare"
  }
  idAssegnatario!: number
  status!: string

  ngOnInit(): void {
    this.getAllEmployees()
    this.route.queryParams.subscribe((params)=> {
      this.idAssegnatario = params['employeeId']
    })
    
  }

  constructor(private service: TicketAsignerService, private route: ActivatedRoute) { }

  getAllEmployees() {
    this.service.getAllEmployees(this.employeesUrl).subscribe(data => {
      this.employees = data
      
    })
  }

  submitButtonClicked(selectedEmp: HTMLSelectElement) {
    return this.service.createTicket({
      taskName: this.taskName,
      taskDesc: this.taskDesc,
      assegnatarioId: this.idAssegnatario,
      employeeId: selectedEmp.value as unknown as number,
      stato: this.statoDefault
    }).subscribe(
      (response) => {
        this.status = "okay"
      },
      (error) => {
        this.status = "error"
      }
    )
    
  }
}
