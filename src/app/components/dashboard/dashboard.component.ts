import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  
  employeeId!: number;
  isManager: boolean = true;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.employeeId = params['employeeId'];
    });
  }
}
