import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { CarrousselComponent } from "./carroussel/carroussel.component";
import { CarrousselModule } from './carroussel/carroussel.module';
import { LastedComponent } from "./components/lasted/lasted.component";
import { MostPopularComponent } from "./components/most-popular/most-popular.component";
import { CategoriasComponent } from './components/categorias/categorias.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, 
              RouterOutlet, 
              HeaderComponent, 
              CarrousselComponent, 
              CarrousselModule, 
              LastedComponent, 
              MostPopularComponent, 
              CategoriasComponent]
})
export class AppComponent {
  title = 'website';

  images = [
    {
      imageSrc:
        'https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/3f283002b47c62b1e5d311c45f95c97e.jpe',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        'https://s2-techtudo.glbimg.com/1Q76caEdN3BriFZ_l61VD5MJkYs=/0x0:1280x720/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/g/0/s4BJiLQGSb9USN3vTvAg/death-note-netflix.jpg',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        'https://m.media-amazon.com/images/S/pv-target-images/78ebbfc64cc407b773d71b7ec63dbde78293f74f672bf1b10c5985e3c13e9a47.jpg',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        'https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/2e54344c7cc1675af721b4021222230f.jpe',
      imageAlt: 'person2',
    },
  ]
}
