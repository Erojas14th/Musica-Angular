import { AlbumDetalleComponent } from './album/album-detalle/album-detalle.component';
import { AlbumListaComponent } from './album/album-lista/album-lista.component';
import { ArtistaInicioComponent } from './artista/artista-inicio/artista-inicio.component';
import { ArtistaDetalleComponent } from './artista/artista-detalle/artista-detalle.component';
import { AlbumComponent } from './album/album.component';
import { ArtistaComponent } from './artista/artista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Navegaciones : Url y sus componentes
const appRoutes: Routes = [
    { path: 'artista', component: ArtistaComponent , children:[
      {  path:'', component: ArtistaInicioComponent},
      {  path:':id', component: AlbumComponent}
    ]},
    { path: 'album', component: AlbumComponent, children:[
        {path:'', component:AlbumListaComponent},
        {  path:':id', component: AlbumDetalleComponent}
    ]},   
    { path: '', redirectTo: 'artista', pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}