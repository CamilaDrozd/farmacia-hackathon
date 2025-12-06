import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { GamesComponent } from '../../shared/components/games/games.component';
import { Medicamento } from '../../enums/medicamentos.enum';
import { MedicamentoGrupo } from '../../enums/medicamento-grupo.enum';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { Ripple } from 'primeng/ripple';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BadgeModule,
    CommonModule,
    CardModule,
    ButtonModule,
    CardModule,
    ReactiveFormsModule,
    Ripple,
    MenuModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  filtro: string = '';

  cards: { titulo: string; descricao: string; rota: string }[] = [
    {
      titulo: 'Receita certa: Desafio da farmácia',
      descricao:
        'Testes seus conhecimentos! Identifique corretamente tipos de receitas',
      rota: '/tipo',
    },
    {
      titulo: 'Farmacologia em ação: Qual é o grupo',
      descricao:
        'Testes os seus conhecimentos sobre medicamentos: identifique o grupo farmacológico correto. Evite erros e ganhe Pontos',
      rota: '/grupos',
    },
    {
      titulo: 'Qual é a indicação',
      descricao:
        'Para cada medicamento apresentado, escolha a indicação terapêutica correta. Acerta garante pontos.',
      rota: '/indicacao',
    },
    {
      titulo: 'Controle especial: Jogo da dispensação',
      descricao:
        'Desafie-se a separar receitas corretas das incorretas e dominar o controle de medicamentos ',
      rota: '/receitas',
    },
  ];
  ngOnInit(): void {
    this.escolherJogo(3);
  }
  escolherJogo(tipo: number): void {
    switch (tipo) {
      case 1:
        this.filtro = Medicamento.anfepramona;
        break;
      case 2:
        this.filtro = MedicamentoGrupo.grupoFarmacologico;
        break;
      case 3:
        this.filtro = [
          Medicamento.alprazolam,
          Medicamento.anfepramona,
        ].toString();
        break;
      case 4:
        break;
    }
  }
}
