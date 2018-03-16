import { Cancion } from './../../_model/cancion';
import { Album } from './../../_model/album';
import { ArtistaService } from './../../_service/artista.service';
import { Artista } from './../../_model/artista';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artista-detalle',
  templateUrl: './artista-detalle.component.html',
  styleUrls: ['./artista-detalle.component.css']
})
export class ArtistaDetalleComponent implements OnInit {
  idArtista: number;
  artista: Artista;
  albums:Album[];
  canciones:Cancion[];
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
