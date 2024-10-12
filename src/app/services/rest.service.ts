import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

   urlApi:string=environment.catalogoUrl;
 

  constructor(private http:HttpClient) { }
  
  agregar(datos:any):Observable<any>{
     
    return this.http.post(this.urlApi+"?insertar=1", datos);

  }

  listar(){
    return this.http.get(this.urlApi);
  }

  eliminar(id:any):Observable<any>{
    return this.http.get(this.urlApi+"?borrar="+id);
  }

  obtener(id:any):Observable<any>{
    return this.http.get(this.urlApi+"?consultar="+id);
  }
  actualizar(id:any, datos:any):Observable<any>{
    return this.http.post(this.urlApi+"?actualizar="+id,datos);
  }

}
