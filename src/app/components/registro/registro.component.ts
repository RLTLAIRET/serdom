import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formularioRegistro:any=FormGroup;
  pass1!: string;
  pass2!:string;
  respuesta:any;
  usuario!:string;

  constructor( private fb:FormBuilder,
               private servicio: LoginService,
               private router: Router) { 
    this.crearFormulario();
    this.CargarFormulario();
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.formularioRegistro.invalid){
       Swal.fire('Error', 'Debe completar los campos del formulario!', 'error') 
       return
    }
     this.pass1 = this.formularioRegistro.value['password1'];
     this.pass2 = this.formularioRegistro.value['password2'];
     if (this.pass1===this.pass2){
     
    } else {
      Swal.fire('Error', 'El password no coinciden!', 'error') 
      return
    }
  
    this.usuario=this.formularioRegistro.value.usuario;
    console.log("Usuario a registrar:",this.usuario);
    
    this.servicio.agregarUsuario(this.formularioRegistro).subscribe(resp=>{
      console.log("Respuesta-registro :", JSON.parse(resp));
      this.respuesta=JSON.parse(resp);


      if (this.respuesta.status){
        Swal.fire('Registro', this.respuesta.mensaje, 'success') 
        this.router.navigate(['/login']);
        
      } else {
        Swal.fire('Registro', this.respuesta.mensaje, 'error') 

        // this.router.navigate([`/login`]);
        this.router.navigate([`/login/:${this.usuario}`]);




      
      }
      
    })
  }

  crearFormulario(){
    this.formularioRegistro = this.fb.group({
      usuario :['', [Validators.required,Validators.minLength(5)]],
      password1 :['', [Validators.required,Validators.minLength(5)]],
      password2 :['', [Validators.required,Validators.minLength(5)]],
      nombre :['', [Validators.required,Validators.minLength(5)]],
      correo   :['', [Validators.required,Validators.email]],
  });
  }  

  CargarFormulario(){
    this.formularioRegistro.reset({
      usuario:"",
      password1: "",
      password2: "",
      nombre:"",
      correo:""
      })
  }
  get nombreValido(){
    return  this.formularioRegistro.get('usuario').invalid && this.formularioRegistro.get('usuario').touched;
  }
  
  get usuarioValido(){
    return  this.formularioRegistro.get('usuario').invalid && this.formularioRegistro.get('usuario').touched;
  }
  get correoValido(){
    return  this.formularioRegistro.get('correo').invalid && this.formularioRegistro.get('correo').touched;
  }
  get pass1Valido(){
    return  this.formularioRegistro.get('password1').invalid && this.formularioRegistro.get('password1').touched;
  }
  get pass2Valido(){
    return  this.formularioRegistro.get('password2').invalid && this.formularioRegistro.get('password2').touched;
  }

}
