import { Album } from './../_model/album';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AlbumService {

  public url:string="http://localhost:8080/album";
  constructor(private http:HttpClient) { }

  getAllAlbum(){
    return this.http.get<Album[]>(`${this.url}/listar`);
  }

  getAlbum(id:number){
    return this.http.get<Album>(`${this.url}/leer/${id}`);
  }

}
