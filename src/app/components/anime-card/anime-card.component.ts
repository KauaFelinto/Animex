import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-anime-card',
  standalone: true,
  imports: [],
  templateUrl: './anime-card.component.html',
  styleUrl: './anime-card.component.css'
})
export class AnimeCardComponent {
  @Input() title: string = "The God of Highschool"
  @Input() sinopse: string = "O Taekwondista Jin Mori, decidi ir a um campeonato de artes marcias para realizar seu sonho de conquistar seu sonho, encontrar seu avo"
}
