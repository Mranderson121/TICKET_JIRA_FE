import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Commento } from 'src/app/interfaces/commento';
import { Storico } from 'src/app/interfaces/storico';
import { Ticket } from 'src/app/interfaces/ticket';
import { CommentoService } from 'src/app/services/commento.service';
import { StoricoService } from 'src/app/services/storico.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-dettaglio-ticket',
  templateUrl: './dettaglio-ticket.component.html',
  styleUrls: ['./dettaglio-ticket.component.css'],
})
export class DettaglioTicketComponent implements OnInit {
  idTicket!: number;
  ticket!: Ticket;
  storico!: Storico[];
  commenti!: Commento[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private storicoService: StoricoService,
    private commentoService: CommentoService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.idTicket = params['idTicket'];
    });


    this.getTicketById(this.idTicket);
    this.getStoricoTaskByIdTask(this.idTicket);
    
  }
  
  getStoricoTaskByIdTask(idTicket:number){
    this.storicoService.getStoricoTaskByIdTask(idTicket).subscribe({
      next: (data:Storico[])=>{
        this.storico = data;
      }, error: (err: any) => {
        console.log(err);
      },
    })
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
  
  getCommentoByTastId(idTicket:number){
    this.commentoService.getCommentiByTaskId(idTicket).subscribe({
      next:(data:Commento[]) => {
        this.commenti = data;
      },
      error : (err:any) => {
        console.log(err)
      }
    })

  }
  
 

}
