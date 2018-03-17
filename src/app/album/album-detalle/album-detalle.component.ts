import { AlbumService } from './../../_service/album.service';
import { Album } from './../../_model/album';
import { ArtistaService } from './../../_service/artista.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


// to remove error : Error: unsafe value used in a resource URL context
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-album-detalle',
  templateUrl: './album-detalle.component.html',
  styleUrls: ['./album-detalle.component.css']
})
export class AlbumDetalleComponent implements OnInit {

  album:Album;
  idAlbum:number;
  idArtista:number;
  urlVideo:string;
temp:any;


  edicion: boolean = false;  
  form: FormGroup;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private artistaService: ArtistaService,
    private albumSerivce:AlbumService,
  private sanitizer: DomSanitizer) {
     
     }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.idAlbum = params['idAlbum'];
      this.idArtista=params['idArtista'];
      console.log(`${this.idAlbum} , ${this.idArtista}`);

      this.albumSerivce.getAlbum(this.idAlbum).subscribe(data=>{
        this.album=data;
        this.urlVideo=`https://www.youtube.com/embed/${data.urlVideo}`;
        this.temp=this.getSafeUrl(this.urlVideo);
        console.log(this.temp.changingThisBreaksApplicationSecurity);
      });

    });
   
  }
  getSafeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
}


}
