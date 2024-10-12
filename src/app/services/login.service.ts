import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url=environment.loginUrl;
  public currentUser$: BehaviorSubject<any>;
  public login$ = new Subject<boolean>();
 
   constructor(
    private http: HttpClient,
    private router:Router
  ){
    this.currentUser$  = new BehaviorSubject(localStorage.getItem('token'))   
    this.login$.next(true);
                                   
  }

  
  agregarUsuario(forma:FormGroup){
      return this.http.post(`${this.url}login.php`, forma.value, {responseType :"text"})
  }

  validarUsuarios(forma:FormGroup){
    return this.http.post(`${this.url}loginvalido.php`, forma.value, {responseType :"text"})
  }

  eliminarUsuario(){

  }

  get getUser(){
    return this.currentUser$.value;
  }

  setUserLS(user:string){
     localStorage.setItem('token', JSON.stringify(user))
     this.login$.next(true)
     this.currentUser$.next(user) 
  }

  logout(){
     localStorage.removeItem('token');
     this.currentUser$.next(null);
     this.login$.next.name
     this.router.navigate(['/inicio'])
  }
}


