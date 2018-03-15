import { ComboboxDirective } from './_directive/combobox.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArtistaComponent } from './artista/artista.component';
import { GeneroComponent } from './genero/genero.component';
import { AlbumComponent } from './album/album.component';
import { CancionComponent } from './cancion/cancion.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    ArtistaComponent,
    GeneroComponent,
    AlbumComponent,
    CancionComponent,
    FooterComponent,
    HeaderComponent,
    ComboboxDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
