import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Router, RouterModule } from '@angular/router';
import { Ripple } from "primeng/ripple";


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ReactiveFormsModule,
    InputMaskModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    FloatLabelModule,
    RouterModule,
    Ripple
],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent {
  form: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmarSenha: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [
      Validators.required,
      Validators.maxLength(11),
      Validators.minLength(11),
    ]),
    faculdade: new FormControl(null, [Validators.required]),
    semestre: new FormControl(null, [Validators.required]),
  });
  optionsFaculdade: { label: string; value: any }[] = [
    {label: 'Cruzeiro do Sul', value: 1 },
    {label: 'Universiade Cidade de São Paulo', value: 2},
    {label: 'Uninove', value: 3},
    {label: 'Universidade Paulista', value: 4},
    {label: 'Anhembi Morumbi', value: 5}
  ];
  optionsSemestre: { label: string; value: any }[] = [
    { label: '1º Semestre', value: 1 },
    { label: '2º Semestre', value: 2 },
    { label: '3º Semestre', value: 3 },
    { label: '4º Semestre', value: 4 },
    { label: '5º Semestre', value: 5 },
    { label: '6º Semestre', value: 6 },
    { label: '7º Semestre', value: 7 },
    { label: '8º Semestre', value: 8 },
  ]
  constructor(private _router: Router) {}

  irParaLogin(){
    this._router.navigate(['/login']);
  }
}
