import { Artista } from './../_model/artista';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArtistaService {

  public url:string="http://localhost:8080/artista";
  
  constructor(private http:HttpClient) { }

  //Metodos

  getAllArtistas(){
       return this.http.get<Artista[]>(`${this.url}/listar`);
  }

  getArtistaById(id:number){
    return this.http.get<Artista>(`${this.url}/leer/${id}`);
}
}
