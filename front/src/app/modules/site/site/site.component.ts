import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-site',
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
  templateUrl: './site.component.html',
  styleUrl: './site.component.scss'
})
export class SiteComponent {

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
