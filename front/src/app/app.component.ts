import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
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
    ButtonModule,
    CommonModule,
    MenuModule,
    SidebarModule,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'FarmaEduc';

  visible = false;

  constructor(private readonly _router: Router) {}
  items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: ['/home'],
      command: () => {
        this._router.navigate(['/home']);
      },
      visible: true,
      disabled: false,
    },
    {
      label: 'Games',
      items: [
        { label: 'Categorização', routerLink: ['/tipo'] },
        { label: 'Grupos', routerLink: ['/grupos'] },
        { label: 'Receitas', routerLink: ['/receitas'] },
      ],
    },
  ];
}
