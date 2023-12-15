import { Component, Input } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-most-popular',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './most-popular.component.html',
  styleUrl: './most-popular.component.css'
})
export class MostPopularComponent {

  @Input()
  id:string = "0"
}
