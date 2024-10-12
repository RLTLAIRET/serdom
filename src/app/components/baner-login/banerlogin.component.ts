import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { LoginService } from '../../services/login.service';

import { Router } from '@angular/router';




@Component({
  selector: 'app-banerlogin',
  templateUrl: './banerlogin.component.html'
})
export class BanerloginComponent implements OnInit {
   
  token:any;
  public login!:boolean;
  public config!:boolean;
  
 
 
 
  constructor(private servicio: LoginService,
               private router: Router) {
               this.servicio.currentUser$.subscribe(usuario=>{
                 if (usuario===null){
                     this.login=false;
                     this.config=false;
                 } else {
                  if (usuario.toUpperCase()==="RODOLFO" || usuario.toUpperCase()==="LDOMENE"  ){
                      this.login=true;
                      this.config=true;
                  } else {
                    this.login=true;
                    this.config=false;
                  }
                 }
                 
               })           
               
               }

  ngOnInit() {
  
  }

  logIn(){
  
    this.router.navigate(['/login'])
  }
  logout(){
 
    this.servicio.logout()
    this.router.navigate(['/home'])
   
  }

}
