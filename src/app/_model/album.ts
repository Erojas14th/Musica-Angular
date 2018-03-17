import { Cancion } from "./cancion";

export class Album{

    public id:number;
    public nombre:string;
    public urlFoto:string;
    public comentario:string;
    public anho:string;
    public canciones:Cancion[];
    public urlVideo:string;
    
}