
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componentes
import { AppComponent } from './app.component';
import { ArtistaComponent } from './artista/artista.component';
import { GeneroComponent } from './genero/genero.component';
import { AlbumComponent } from './album/album.component';
import { CancionComponent } from './cancion/cancion.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

// Directiva
import { ComboboxDirective } from './_directive/combobox.directive';

// Routing
import { AppRoutingModule } from './app-routing.module';
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
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
