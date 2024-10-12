import { HttpClient, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  url:string = environment.catalogoUrl;
  
  constructor( private http:HttpClient) {
  }
  subirImagen(datos:any):Observable<any>{
    return this.http.post(`${this.url}upload.php`, datos, {responseType: "text"});
    
  }
  
}
