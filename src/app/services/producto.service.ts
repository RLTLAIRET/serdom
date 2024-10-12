import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

   url=environment.catalogoUrl;

  constructor( private http: HttpClient) { }
  

  AgregarProducto(datosProducto:Producto):Observable<any>{
     return this.http.post(`${this.url}producto.php`, datosProducto, {responseType :"text"});
  }

  ListarProducto():Observable<any>{
    return this.http.get(`${this.url}producto.php`, {responseType :"text"});
  }
  // ListarProductoCat(){
  //   return this.http.get(`${this.url}producto.php`, {responseType :"text"});
  // }

  consultarProducto(id:any): Observable<any>{
    console.log("id desde el servicio Prod : ",id);
       return this.http.get(`${this.url}producto.php`+"/?id="+id, {responseType :"text"});
  }
  consultarProductocat(id:any): Observable<any>{
    console.log("id desde el servicio cat Prod : ",id);
    return this.http.get(`${this.url}catproducto.php`+"/?id="+id, {responseType :"text"});
  } 

  EliminarProducto(id:any):Observable<any>{
    console.log(id);
    return this.http.delete(`${this.url}producto.php`+"/?id="+id, {responseType :"text"});
  }

  editarProducto(id:any, datosProducto:Producto):Observable<any>{
    return this.http.post(`${this.url}editProducto.php`+"/?id="+id, datosProducto, {responseType :"text"});
  }

  subirImagen( datosArchivo:any): Observable<any>{
      
    return this.http.post(`${this.url}upload.php`, datosArchivo, {responseType :"text"});
  }
  deleteFile( archivo:any): Observable<any>{
    return this.http.get(`${this.url}delfile.php`+"/?archivo="+archivo, {responseType :"text"});
  }

 
}
