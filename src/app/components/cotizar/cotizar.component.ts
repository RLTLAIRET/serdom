import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductoService } from '../../services/producto.service';
import { environment } from '../../../environments/environment.prod';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cotizar',
  templateUrl: './cotizar.component.html',
  styleUrls: ['./cotizar.component.css']
})
export class CotizarComponent implements OnInit {
  forma:any;
  id:any;
  productos:any=[];
  producto:any=[];
  url=environment.correoUrl;

  constructor
  (
    private actrouter: ActivatedRoute,
    private rest: ProductoService,
    private http: HttpClient,
    private router : Router,
    private fb : FormBuilder
  ) 
  {
       this.actrouter.params.subscribe(params =>{
            this.id=params['producto'];
         
            
            this.rest.consultarProducto(this.id).subscribe(resp=>{
               this.productos=JSON.parse(resp)

               for (let index = 0; index < this.productos.length; index++) {
                const element = this.productos[index];
                if (element.id_producto===this.id){

                } else {
                 this.productos.splice(index,1);
                }
                
              }
              
                
                 
                  
                   
               });
               
            })
      
  }

  ngOnInit(): void {
    this.crearFormulario()
    this.CargarFormulario() 
  }

  onSubmit() {
     if (this.forma.invalid){
      Swal.fire('Error', 'Debe completar los campos del formulario!', 'error') 
     return
  }
      
  const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    
  this.http.post(`${this.url}enviarcorreo.php`, this.forma.value, {responseType :"text"}).subscribe(resp=>{
      if (resp="El Mensaje ha sido Enviado"){
          Swal.fire('Gracias por Escribir', 'El Mensaje ha sido Enviado!', 'success')
      } else {
         Swal.fire('Error', 'El Mensaje no fue entregado!', 'error') 
      }
  });
   this.router.navigate(['/inicio']);
  }

  crearFormulario(){
      this.forma = this.fb.group({
        nombre   :['', [Validators.required,Validators.minLength(5)]],
        telefono :['', [Validators.required,Validators.minLength(9)]],
        correo   :['', [Validators.required,Validators.email]],
        asunto   :['', [Validators.required,Validators.minLength(5)]],
        mensaje  :['', [Validators.required,Validators.minLength(10)]]
      });
  }  
  CargarFormulario(){
        this.forma.reset({
          nombre: "",
          correo: "",
          asunto: "Cotizar Ref-SER-00"+this.id,
          telefono : "",
          mensaje : "Estimados Señores Favor Cotizar lo indicado Ref-00"+this.id+" Cantidad : "
        })
  }
  get nombreValido(){
      return  this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }
  get correoValido(){
      return  this.forma.get('correo').invalid && this.forma.get('correo').touched;
  }
  get telefonoValido(){
      return  this.forma.get('telefono').invalid && this.forma.get('telefono').touched;
  }
  get mensajeValido(){
      return  this.forma.get('mensaje').invalid && this.forma.get('mensaje').touched;
  }
  

}
