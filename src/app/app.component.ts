import { Component } from '@angular/core';
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HomePageComponent, RouterLink, RouterOutlet, HeaderComponent]
})
export class AppComponent {
 
}
