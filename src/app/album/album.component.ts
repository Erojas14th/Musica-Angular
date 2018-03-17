import { ArtistaService } from './../_service/artista.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  idArtista: number;

  constructor(){}

  ngOnInit() {
  
   
  }


}
