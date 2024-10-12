import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {

  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }


  enviar(){
    // return this.http.post(this.baseUrlenviarcorreo.php)
  }
}
