import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { GrupoComponent } from './modules/games/grupo/grupo.component';

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
];
