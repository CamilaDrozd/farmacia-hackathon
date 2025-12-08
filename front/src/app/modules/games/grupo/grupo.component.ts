import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { MedicamentoGrupo } from '../../../enums/medicamento-grupo.enum';
import { GamesComponent } from '../../../shared/components/games/games.component';
import { perguntas } from '../../../db/perguntas.db';
import { Dificuldades } from '../../../enums/dificuldades.enums';
import { SelectButtonModule } from 'primeng/selectbutton';
@Component({
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    CommonModule,
    InputTextModule,
    ReactiveFormsModule,
    RouterModule,
    GamesComponent,
    SelectButtonModule,
  ],
  providers: [MessageService],
  templateUrl: './grupo.component.html',
  styleUrl: './grupo.component.scss',
})
export class GrupoComponent implements OnInit {
  title = 'Farmacologia em ação: Qual é o grupo ?';
  bancoDados = [...perguntas];
  dificuldade = Dificuldades.facil;
  form = new FormGroup({
    dificuldade: new FormControl(this.dificuldade),
  });
  options = [
    { name: 'Facil', value: Dificuldades.facil },
    { name: 'Medio', value: Dificuldades.medio },
    { name: 'Dificil', value: Dificuldades.dificil },
  ];
  pontos = 0;
  ngOnInit(): void {
    this.bancoDados
      .filter((item) => item.grupo === MedicamentoGrupo.grupoFarmacologico)
      .splice(0, this.dificuldade);
  }

  alterandoDificuldade() {
    this.dificuldade = this.form.get('dificuldade')?.value as number;
    this.bancoDados = [...perguntas]
      .filter((item) => item.grupo == MedicamentoGrupo.grupoFarmacologico)
      .splice(0, this.dificuldade);
  }

  alterandoPontos(event: number): void {
    this.pontos = event;
  }
}
