import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
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
  employeeTrovato!: Employee;
  

  constructor(private router: Router, private empService: EmployeeService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });


  }





  // if (data != null) {
  //   this.router.navigate(['/cliente'], {
  //     queryParams: {
  //       nome: this.clienteTrovato.nome,
  //       clienteId: this.clienteTrovato.clienteId
  //     },
      
  //   })
  // } else {
  //   this.failLoginMsg = true;
  // }

  loginOnSubmit() {
    this.empService
      .loginEmployee('http://localhost:8080/api/login', {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      })
      .subscribe({
        next: (data: any) => {
          this.employeeTrovato = data;
          console.log(this.employeeTrovato);
          if (data != null) {
            this.router.navigate(['/dashboard'], {
              queryParams: {
                employeeId: this.employeeTrovato.id
              }
            })
          } else {
            this.failLoginMsg = true;
          }
        },
        error: (err: any) => {
          console.error(err);
        },
      });
  }
}
