import { Component } from '@angular/core';
import { MenuModule } from "primeng/menu";

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [MenuModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent {

}
