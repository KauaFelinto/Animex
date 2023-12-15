import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AnimePageComponent } from "./components/anime-page/anime-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'Anime/:id', component: AnimePageComponent}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutes {};