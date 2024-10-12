import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Catalogo } from '../modelo/catalogo';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  url=environment.catalogoUrl;
 
  constructor( private http: HttpClient) { }

  AgregarCatalogo(datosCatalogo:Catalogo):Observable<any>{
    return this.http.post(`${this.url}catalogo.php`, datosCatalogo, {responseType :"text"});
  }

  ListarCatalogo():Observable<any>{
    return this.http.get(`${this.url}catalogo.php`, {responseType :"text"});
  }

  consultarCatalogo(id:any): Observable<any>{
       return this.http.get(`${this.url}catalogo.php`+"/?id="+id, {responseType :"text"});
  }

  EliminarCatalogo(id:any):Observable<any>{
    return this.http.delete(`${this.url}catalogo.php`+"/?id="+id, {responseType :"text"});
  }

  editarCatalogo(id:any, datosCatalogo:Catalogo):Observable<any>{
    return this.http.post(`${this.url}editcatalogo.php`+"/?id="+id, datosCatalogo, {responseType :"text"});
  }

  uploadServe( datosArchivo:any): Observable<any>{
     return this.http.post(`${this.url}upload.php`, datosArchivo, {responseType :"text"});
  }
  deleteFile( archivo:any): Observable<any>{
    return this.http.get(`${this.url}delfile.php`+"/?archivo="+archivo, {responseType :"text"});
 }
}
