import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  failLoginMsg:boolean=false;
  constructor (
    private router:Router
  ){}
  ngOnInit(): void {
    this.loginForm=new FormGroup({
      username: new FormControl(null,Validators.required),
      password:new FormControl(null,Validators.required),
    });
  }

  onSubmit(){
    
  }

}
