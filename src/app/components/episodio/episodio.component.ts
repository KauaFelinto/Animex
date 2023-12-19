import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-episodio',
  standalone: true,
  imports: [],
  templateUrl: './episodio.component.html',
  styleUrl: './episodio.component.css'
})
export class EpisodioComponent {

  @Input() imageEp: string = 'https://static01.nyt.com/images/2020/07/06/arts/06tvcol-1/06tvcol-1-superJumbo.jpg'
  @Input() animeEp: string = ""
}
