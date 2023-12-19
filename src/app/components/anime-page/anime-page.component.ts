import { Component, Input } from '@angular/core';
import { EpisodioComponent } from "../episodio/episodio.component";
import { AnimeCardComponent } from "../anime-card/anime-card.component";

@Component({
    selector: 'app-anime-page',
    standalone: true,
    templateUrl: './anime-page.component.html',
    styleUrl: './anime-page.component.css',
    imports: [EpisodioComponent, AnimeCardComponent]
})
export class AnimePageComponent {

  @Input() title: string = "The God of Highschool"
  @Input() sinopse: string = "O Taekwondista Jin Mori, decidi ir a um campeonato de artes marcias para realizar seu sonho de conquistar seu sonho, encontrar seu avo"
}
