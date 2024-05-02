import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/interfaces/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-dettaglio-ticket',
  templateUrl: './dettaglio-ticket.component.html',
  styleUrls: ['./dettaglio-ticket.component.css'],
})
export class DettaglioTicketComponent implements OnInit {
  idTicket!: number;
  ticket!: Ticket;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ticketService: TicketService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.idTicket = params['idTicket'];
    });


    this.getTicketById(this.idTicket);
    
  }

  getTicketById(idTicket:number) {
    this.ticketService.getTicketById(idTicket).subscribe({
      next: (data: Ticket) => {
        this.ticket = data;
        console.log(data)
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  
  
 

}
