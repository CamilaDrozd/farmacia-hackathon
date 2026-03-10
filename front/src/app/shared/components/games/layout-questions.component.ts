import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PerguntaInterface } from '../../interfaces/perguntas.interface';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-games',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    CommonModule,
    InputTextModule,
    ReactiveFormsModule,
    RouterModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './layout-questions.component.html',
  styleUrl: './layout-questions.component.scss',
})
export class LayoutQuestionsComponent implements OnInit {
  @Output() numberOutput = new EventEmitter<any>();
  @Input() bancoDados!: PerguntaInterface[];
  pontos: number = 0;
  step = 0;
  pontosMaximo: number = 50;
  cards: PerguntaInterface[] = [];
  cardAtual!: PerguntaInterface | undefined;
  resposta: string = '';
  loading = false;
  constructor(
    private _message: MessageService,
    private _router: Router,
  ) {}
  ngOnInit(): void {
    this.cards = this.bancoDados.map((item) => {
      return {
        ...item,
        alternativas: item.alternativas.sort(() => Math.random() - 0.5),
      };
    });
    this.cardAtual = this.cards[this.step];
  }

  confirmar(): void {
    if (this.step < this.cards.length - 1) {
      if (this.validacao()) {
        this.loading = true;
        this._message.add({
          severity: 'success',
          detail: `Mais ${this.pontosMaximo} pontos`,
          life: 1000,
        });
        this._message.add({
          severity: 'success',
          detail: this.cardAtual?.alternativas.find(
            (item) => item.alternativa === this.resposta,
          )?.message,
        });
        this.step += 1;
        setTimeout(() => {
          this.loading = false;
        }, 100);
        this.cardAtual = this.cards[this.step];
        this.adicionandoPontos();
        this.resetarPontosMaximo();
        this.resposta = '';
      } else {
        this._message.add({
          severity: 'error',
          detail: this.cardAtual?.alternativas.find(
            (item) => item.alternativa === this.resposta,
          )?.message,
        });
        this.pontosMaximo -= 10;
      }
    } else {
      this._message.add({
        severity: 'success',
        detail: `Parabens você ganhou ${this.pontos} pontos`,
      });
      setTimeout(() => {
        this._router.navigate(['/home']);
      }, 3000);
    }
  }

  adicionandoPontos(): void {
    this.pontos += this.pontosMaximo;
    this.numberOutput.emit(this.pontos);
  }

  resetarPontosMaximo(): void {
    this.pontosMaximo = 50;
  }
  validacao(): boolean {
    return this.cardAtual?.resposta === this.resposta;
  }

  voltarHome(): void {
    this._router.navigate(['/home']);
  }

  escolherResposta(resposta: string): void {
    this.resposta = resposta;
  }
}
