import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { environment } from '../../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  formularioLogin:any=FormGroup;
  url=environment.loginUrl;
  respuesta:any;
  pass1!:string;
  public usuario:any;
  

  constructor(
         private fb:FormBuilder,
         private http:HttpClient,
         private router:Router,
         private servicio : LoginService,
         private actrouter: ActivatedRoute
  ) { 

    // this.actrouter.params.subscribe(parametro =>{
    // 
      
      
    // })

    this.crearFormulario();
    this.CargarFormulario();
  }
  

  
  onSubmit() {
    if (this.formularioLogin.invalid){
     Swal.fire('Error', 'Debe completar los campos del formulario!', 'error') 
    return
    }
    this.servicio.validarUsuarios(this.formularioLogin).subscribe(resp=>{
         console.log("Respuesta-login :", JSON.parse(resp));
         this.respuesta=JSON.parse(resp)
         if (this.respuesta.status){
            if (this.formularioLogin.value.usuario.toUpperCase()==="RODOLFO" || this.formularioLogin.value.usuario.toUpperCase()==="LDOMENE"  ){
               this.router.navigate(['/config']);
               this.servicio.setUserLS(this.formularioLogin.value.usuario)
           } else {
             this.servicio.setUserLS(this.formularioLogin.value.usuario)
             this.router.navigate(['/home']);

            }
         } else {
             Swal.fire('Aviso', this.respuesta.mensaje, 'error') 
             this.router.navigate(['/login']);
         }
  
    });
     
    }
 
    crearFormulario(){
      this.formularioLogin = this.fb.group({
        usuario :['', [Validators.required,Validators.minLength(5)]],
        password :['', [Validators.required,Validators.minLength(5)]]
    });
    }  

    CargarFormulario(){
      this.formularioLogin.reset({
        usuario: "",
        password: "",
        
        })
    }

   
     
 
}
