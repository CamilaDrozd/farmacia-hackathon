import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { GamesComponent } from "../../shared/components/games/games.component";
import { Medicamento } from '../enums/medicamentos.enum';
import { MedicamentoGrupo } from '../enums/medicamento-grupo.enum';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule, ReactiveFormsModule, GamesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  filtro: string = '';
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
