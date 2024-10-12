import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from '../modelo/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  
  url=environment.catalogoUrl;
 
  constructor( private http: HttpClient) { }

  AgregarCategoria(datoscategoria:Categoria):Observable<any>{
    return this.http.post(`${this.url}categoria.php`, datoscategoria, {responseType :"text"});
  }

  ListarCategoria():Observable<any>{
    return this.http.get(`${this.url}categoria.php`, {responseType :"text"});
  }

  consultarCategoria(id:any): Observable<any>{
       return this.http.get(`${this.url}categoria.php`+"/?id="+id, {responseType :"text"});
  }

  EliminarCategoria(id:any):Observable<any>{
    return this.http.delete(`${this.url}categoria.php`+"/?id="+id, {responseType :"text"});
  }

  editarCategoria(id:any, datoscategoria:Categoria):Observable<any>{
    return this.http.post(`${this.url}editcategoria.php`+"/?id="+id, datoscategoria, {responseType :"text"});
  }

  subirImagen( datosArchivo:any): Observable<any>{
     
    return this.http.post(`${this.url}upload.php`, datosArchivo, {responseType :"text"});
  }
  deleteFile( archivo:any): Observable<any>{
    return this.http.get(`${this.url}delfile.php`+"/?archivo="+archivo, {responseType :"text"});
 }
}



