import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CarruselService } from '../../services/carrusel.service';

@Component({
  selector: 'app-config-carrusel',
  templateUrl: './config-carrusel.component.html',
  styleUrls: ['./config-carrusel.component.css']
})
export class ConfigCarruselComponent implements OnInit {
  loading:boolean=false;
  imagenes:any=[];
  formularioCarrusel!:FormGroup;
  imagen:any;
  respuesta:any;
  constructor(private servicio : CarruselService,
              public formulario:FormBuilder) {

    this.formularioCarrusel=this.formulario.group({
      imagen: ['', Validators.required]
    }) 
  }
  

  ngOnInit(): void {
      this.servicio.ListarImagen().subscribe(resp=>{
      console.log('imagens listada:',  resp);
      this.respuesta=JSON.parse(resp);
      this.imagenes=this.respuesta.data;
  })
  }

  capturarFile(event:string){
    this.loading=true;
     let longitud =event.length;
     this.formularioCarrusel.controls['imagen'].setValue(event.slice(1,longitud-1));
     console.log('imagen',this.formularioCarrusel.valid);
     this.enviarCarrusel()
    
 }
 enviarCarrusel(){
  //  console.log(this.formularioCarrusel);
   if (this.formularioCarrusel.valid){
    this.servicio.AgregarImagen(this.formularioCarrusel.value).subscribe(resp=>{
    this.respuesta=JSON.parse(resp);
    if (this.respuesta.status){
      Swal.fire('Carrusel', this.respuesta.mensaje, 'success') 
      this.listar()
    } else {
      Swal.fire('Carrusel', this.respuesta.mensaje, 'error') 
    }
 });
       
} else {
Swal.fire('Aviso', 'Debe completar todos los campos del formulario', 'error') 
}
 }
 eliminar(idx:any, i:number, archivo:string){
  Swal.fire({
    title: 'Desea Eliminar esta Imagen?',
    showDenyButton: true,
    showCancelButton: false,
  }).then((result) => {
    if (result.isConfirmed) {
       this.servicio.EliminarCarrusel(idx).subscribe(resp=>{
         console.log("Respuesta-eliminar:", resp);
         this.imagenes.splice(i,1);
         this.servicio.deleteFile(archivo).subscribe(resp => console.log(resp));
        
      });
    } else if (result.isDenied) {
      // Swal.fire('Changes are not saved', '', 'info')
    }
  })
 }

 listar(){
  this.servicio.ListarImagen().subscribe(resp=>{
    console.log('imagens listada:',  resp);
    this.respuesta=JSON.parse(resp);
    this.imagenes=this.respuesta.data;
 })
}

 }
