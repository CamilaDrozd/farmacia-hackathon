import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { GrupoComponent } from './modules/games/grupo/grupo.component';
import { ReceitasComponent } from './modules/games/receitas/receitas.component';
import { IndicacaoComponent } from './modules/games/indicacao/indicacao.component';
import { PrescricaoComponent } from './modules/games/prescricao/prescricao.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [],
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
  {
    path: 'grupos',
    component: GrupoComponent,
  },
  {
    path: 'tipo',
    component: ReceitasComponent,
  },
  {
    path: 'indicacao',
    component: IndicacaoComponent,
  },
  {
    path: 'prescricao',
    component: PrescricaoComponent,
  },
];
