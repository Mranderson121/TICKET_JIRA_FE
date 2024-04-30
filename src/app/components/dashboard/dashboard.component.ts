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

  num:number = 0;

  arrayFinto: Array<any> = ["aa", "ag", "ag", "ag", "ag", "ag" ]
  

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.employeeId = params['employeeId'];
    });

    if (this.arrayFinto) {
      for (let i=1; i < this.arrayFinto.length; i++){
        console.log(i)
        

      }
    }
  }
  
}
