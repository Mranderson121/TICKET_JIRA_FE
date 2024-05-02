import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Commento } from 'src/app/interfaces/commento';
import { Stato } from 'src/app/interfaces/stato';
import { Storico } from 'src/app/interfaces/storico';
import { Ticket } from 'src/app/interfaces/ticket';
import { CommentoService } from 'src/app/services/commento.service';
import { StatoService } from 'src/app/services/stato.service';
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
  statiSenzaNuovo!:Stato[];
  clicked!: boolean
  cont = 0

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private storicoService: StoricoService,
    private statoService : StatoService,
    private commentoService: CommentoService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.idTicket = params['idTicket'];
    });

    this.getAllStati();
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
  
  getAllStati(){
    this.statoService.getAllStati().subscribe({
      next : (data:Stato[]) => {
        this.statiSenzaNuovo = data.filter(e =>  e.stateName != "nuovo")
      },
      error : (err : any ) => {
        console.log(err)
      }
    })
  }
 
  updateTicket() {
    this.cont += 1
    if (this.cont%2 != 0) {
      this.clicked = true
    } else {
      this.clicked = false
    }
  //  this.ticketService.updateTicket().subscribe() da finire
  }
}
