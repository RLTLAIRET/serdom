import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarruselService {

  url=environment.catalogoUrl;
 
  constructor( private http: HttpClient) { }

  AgregarImagen(imagen:any):Observable<any>{
    return this.http.post(`${this.url}carrusel.php`, imagen, {responseType :"text"});
  }

  ListarImagen():Observable<any>{
    return this.http.get(`${this.url}carrusel.php`, {responseType :"text"});
  }

  consultarImagen(id:any): Observable<any>{
       return this.http.get(`${this.url}carrusel.php`+"/?id="+id, {responseType :"text"});
  }

  EliminarCarrusel(id:any):Observable<any>{
    return this.http.delete(`${this.url}carrusel.php`+"/?id="+id, {responseType :"text"});
  }

   subirImagen( imagen:any): Observable<any>{
     
    return this.http.post(`${this.url}carrusel.php`, imagen, {responseType :"text"});
  }
  deleteFile( archivo:any): Observable<any>{
    return this.http.get(`${this.url}delfile.php`+"/?archivo="+archivo, {responseType :"text"});
 }
}
