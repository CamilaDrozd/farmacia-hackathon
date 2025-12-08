import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AvatarModule,
    BadgeModule,
    RouterOutlet,
    CommonModule,
    SidebarModule,
    ButtonModule,
    MenuModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'FarmaEduc';

  visible = false;

  items: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'pi pi-home',
      command: () => console.log('Dashboard'),
    },
    {
      label: 'Usuários',
      icon: 'pi pi-users',
      command: () => console.log('Usuários'),
    },
    {
      label: 'Games',
      items: [
        { label: 'Categorização' },
        { label: 'Grupos' },
        { label: 'Receitas' },
      ],
    },
  ];
}
