import { Router, ActivatedRoute } from '@angular/router';
import { ArtistaService } from './../../_service/artista.service';
import { Artista } from './../../_model/artista';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artista-inicio',
  templateUrl: './artista-inicio.component.html',
  styleUrls: ['./artista-inicio.component.css']
})
export class ArtistaInicioComponent implements OnInit {

  artistas: Artista[];
  constructor(private artistaService: ArtistaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.artistaService.getAllArtistas().subscribe(data => {
      this.artistas = data;
    });
  }

}
