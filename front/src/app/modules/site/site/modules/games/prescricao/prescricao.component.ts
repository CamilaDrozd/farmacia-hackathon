import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { Ripple } from 'primeng/ripple';
import { prescricao } from '../../../../../../db/prescricao.db';
@Component({
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    CommonModule,
    InputTextModule,
    ReactiveFormsModule,
    RouterModule,
    Ripple,
  ],
  providers: [MessageService],
  templateUrl: './prescricao.component.html',
  styleUrl: './prescricao.component.scss',
})
export class PrescricaoComponent implements OnInit {
  title = 'Controle especial: Jogo da dispensação';
  prescricao = prescricao[0];
  enunciado: string =
    'O paciente comparece à farmácia portando uma prescrição de medicamento sujeito a controle especial. Com base na prescrição apresentada, avalie se todos os requisitos legais e técnicos estão corretos e determine se o medicamento deve ser dispensado ou não dispensado.';
  ngOnInit(): void {}
}
