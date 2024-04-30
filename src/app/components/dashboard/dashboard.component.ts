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
  constructor(private route: ActivatedRoute, private router: Router, private service: TicketService) { }

  employeeId!: number;
  isManager: boolean = true;
  buttons!: Button[]
  num!: number

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.employeeId = params['employeeId'];
    });
    this.getNumberOfPages()
    console.log(this.num)
  }

  getNumberOfPages() {
    return this.service.getTicketByUserId(this.employeeId).subscribe(data => {
      this.num = Math.ceil(data / 5)
      console.log(this.num)
      if (this.num > 0) {
        for (let i = 0; i < this.num; i++) {
          this.buttons[i].value = i
          this.buttons[i].min = 1 + (5 * i)
          this.buttons[i].max = 5 + (5 * i)
        }
      }
    })
  }

}
