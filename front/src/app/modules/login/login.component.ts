import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonDirective } from "primeng/button";
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { InputTextModule } from "primeng/inputtext";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, CardModule, ButtonDirective, InputTextModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('')
  });

  constructor(private _router : Router){}

  login() {
    const formValue = this.loginForm.value;
    console.log('Login form submitted:', formValue);
  }
  
  irParaCadastro(){
    this._router.navigate(['/cadastro']);
  }
  irParaHome(){
    this._router.navigate(['/home']);
  }

}
