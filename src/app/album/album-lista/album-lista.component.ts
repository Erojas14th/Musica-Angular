import { Cancion } from './../../_model/cancion';
import { Album } from './../../_model/album';
import { ArtistaService } from './../../_service/artista.service';
import { Artista } from './../../_model/artista';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-lista',
  templateUrl: './album-lista.component.html',
  styleUrls: ['./album-lista.component.css']
})
export class AlbumListaComponent implements OnInit {

  idArtista: number;
  artista: Artista;
  albums:Album[];
  canciones:Cancion[];

  // Filtrado
  filterQuery:string;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private artistaService: ArtistaService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.idArtista = params['id'];
      this.artistaService.getArtistaById(this.idArtista).subscribe(data => {
      this.artista=data;
      console.log(this.artista);
      });

    });
   
  }
  //METODOS

}
