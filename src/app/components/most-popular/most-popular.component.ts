import { Component, Input } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AnimeBarComponent } from "../anime-bar/anime-bar.component";

@Component({
    selector: 'app-most-popular',
    standalone: true,
    templateUrl: './most-popular.component.html',
    styleUrl: './most-popular.component.css',
    imports: [RouterOutlet, RouterLink, AnimeBarComponent]
})
export class MostPopularComponent {

  @Input()
  id:string = "0"
}
