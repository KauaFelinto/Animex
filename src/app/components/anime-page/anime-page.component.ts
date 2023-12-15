import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-anime-page',
  standalone: true,
  imports: [],
  templateUrl: './anime-page.component.html',
  styleUrl: './anime-page.component.css'
})
export class AnimePageComponent {

  @Input() title: string = "The God of Highschool"
  @Input() sinopse: string = "O Taekwondista Jin Mori, decidi ir a um campeonato de artes marcias para realizar seu sonho de conquistar seu sonho, encontrar seu avo"
}
