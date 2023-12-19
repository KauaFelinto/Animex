import { Component, Input } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-anime-bar',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './anime-bar.component.html',
  styleUrl: './anime-bar.component.css'
})
export class AnimeBarComponent {
  @Input()
  id:string = "0"

  @Input() animeIcon: string = ""
}
