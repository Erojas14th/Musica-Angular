import { AlbumComponent } from './album/album.component';
import { ArtistaComponent } from './artista/artista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Navegaciones : Url y sus componentes
const appRoutes: Routes = [
    { path: 'artista', component: ArtistaComponent},
    { path: 'album', component: AlbumComponent},   
    { path: '', redirectTo: 'artista', pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}