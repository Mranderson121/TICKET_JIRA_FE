import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Button } from 'src/app/interfaces/button';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: TicketService) {}

  employeeId!: number;
  taskmanager?: number;
  buttons!: Button[];
  num!: number;
  button!: Button;

  ngOnInit(): void {
    this.buttons = [];
    this.button = { value: 0, min: 0, max: 0 };

    this.route.queryParams.subscribe((params) => {
      this.employeeId = params['employeeId'];
      this.taskmanager = params['taskmanager'];
    });

    this.getNumberOfPages();
  }

  getNumberOfPages() {
    return this.service.getTicketByUserId(this.employeeId).subscribe({
      next: (data: number) => {
        console.log(data);
        this.num = Math.ceil(data / 5);
        console.log(this.num);
        if (this.num > 0) {
          for (let i = 0; i < this.num; i++) {
            this.button = {
              value: i,
              min: 1 + 5 * i,
              max: 5 + 5 * i,
            };
            this.buttons.push(this.button);
            console.log('sto aggiungendo questo bottone: ', this.button);
          }
        }
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  getPageTickets(min:number, max:number) {
    return this.service.pageTicket({
      employeeId: this.employeeId,
      min: min, 
      max: max
    }).subscribe({
      next : (data: any) => {
        console.log(data)
        
      },
      error: (err:any) => {
        console.log(err)
      }
    })
  }
}
