import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { SiteComponent } from './modules/site/site/site.component';
import { GamesComponent } from './modules/site/site/modules/games/games.component';
import { GrupoComponent } from './modules/site/site/modules/games/grupo/grupo.component';
import { IndicacaoComponent } from './modules/site/site/modules/games/indicacao/indicacao.component';
import { PrescricaoComponent } from './modules/site/site/modules/games/prescricao/prescricao.component';
import { ReceitasComponent } from './modules/site/site/modules/games/receitas/receitas.component';

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
    path: 'site',
    component: SiteComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
      },
      {
        path: 'games',
        component: GamesComponent,
        children: [
          {
            path: 'grupo',
            component: GrupoComponent,
          },
          {
            path: 'indicacao',
            component: IndicacaoComponent,
          },
          {
            path: 'prescricao',
            component: PrescricaoComponent
          },
          {
            path: 'receitas',
            component: ReceitasComponent
          }
        ],
      },
    ],
  },
];
