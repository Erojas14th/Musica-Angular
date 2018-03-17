
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
import { AlbumListaComponent } from './album/album-lista/album-lista.component';
import { AlbumDetalleComponent } from './album/album-detalle/album-detalle.component';

// Directiva
import { ComboboxDirective } from './_directive/combobox.directive';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Servicios
import { ArtistaService } from './_service/artista.service';
// Http
import { HttpClientModule } from '@angular/common/http';
import { ArtistaDetalleComponent } from './artista/artista-detalle/artista-detalle.component';
import { ArtistaInicioComponent } from './artista/artista-inicio/artista-inicio.component';
//Modulos
import { FormsModule } from '@angular/forms';
import { DataTableModule } from "angular2-datatable";
// Pipe
import { AlbumFilterPipe } from './_pipe/album-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArtistaComponent,
    GeneroComponent,
    AlbumComponent,
    CancionComponent,
    FooterComponent,
    HeaderComponent,
    ComboboxDirective,
    ArtistaDetalleComponent,
    ArtistaInicioComponent,
    AlbumListaComponent,
    AlbumDetalleComponent,
    AlbumFilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTableModule
    
  ],
  providers: [ArtistaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
