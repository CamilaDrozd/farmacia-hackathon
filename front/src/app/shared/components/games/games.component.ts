import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { Ripple } from 'primeng/ripple';
import { perguntas } from '../../../db/perguntas.db';
import { PerguntaInterface } from '../../interfaces/perguntas.interface';
import { Medicamento } from '../../../modules/enums/medicamentos.enum';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    CommonModule,
    InputTextModule,
    ReactiveFormsModule,
    Ripple,
  ],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss',
})
export class GamesComponent implements OnInit {
  @Input() filtro: string = Medicamento.morfina;
  bancoDados = perguntas;
  step = 0;
  cards: PerguntaInterface[] = [];
  cardAtual!: PerguntaInterface | undefined;
  resposta: string = '';

  ngOnInit(): void {
    this.cards = this.bancoDados.filter(
      (item) => this.filtro.includes(item.medicamento)
    );
    console.log(this.cards);
    
    this.cardAtual = this.cards[this.step];
  }

  confirmar(): void {
    if (this.step < this.cards.length - 1) {
      this.step += 1;
      this.cardAtual = this.cards[this.step];
    }
  }
  validacao(): boolean {
    return this.cardAtual?.resposta === this.resposta;
  }


  escolherResposta(resposta: string): void {
    this.resposta = resposta;
    console.log('Resposta está certa? ', this.validacao());
  }
}
