import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/interfaces/employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  failLoginMsg: boolean = false;
  
  constructor(private router: Router, private empService: EmployeeService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  loginOnSubmit(): void {
    this.empService
      .loginEmployee({
        email: 
        "NKOCHHAR", 
        //"ISCIARRA",  
        // cambiare con this.loginForm.value.email 
        password:
        "5151234568", 
        //"5151244369"  
        // cambiare con this.loginForm.value.password 
      })
      .subscribe({
        next: (employee: Employee) => {
          if (employee) {
            console.log(employee)
            this.router.navigate(['/dashboard'], {
              queryParams: { employeeId: employee.employeeId,
                taskmanager: employee.taskmanager
               },
            });
          } else {
            this.failLoginMsg = true;
          }
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }
}
