import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import Swal from 'sweetalert2';
import { ProductoService } from '../../services/producto.service';


@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

 
  formularioProducto:FormGroup;
  previsualizacion:string="";
  loading:boolean=false;
  respuesta:any;
  categorias:any;

  constructor( public formulario:FormBuilder,
               private catService: CategoriaService,
               private rest: ProductoService,
               private router: Router) {

    this.formularioProducto=this.formulario.group({
      categoria: ['',Validators.required],
      nombre: ['',Validators.required],
      descripcion:['',Validators.required],
      imagen: [''],
      manual:[''],
      precio:[''],
      stock:[''],
      })
   }

  ngOnInit(): void {
    this.catService.ListarCategoria().subscribe(resp=>{
      this.respuesta=JSON.parse(resp);
      this.categorias=this.respuesta.data
      console.log(this.categorias);
      
    });
  }
  regresarConfig(){
     this.router.navigate(['/config']);
  }

  capturarFiledoc(evento:any){
     console.log("Documento Pdf :");
     this.formularioProducto.controls['manual'].setValue(evento.name);
       
  }

  capturarFile(event:any){
    console.log("leyendo evento: ", event.slice(1,event.length-1));
    this.loading=true;
    this.formularioProducto.controls['imagen'].setValue(event.slice(1,event.length-1));
   
  }

  enviarProducto(){
  if (this.formularioProducto.valid){
        this.rest.AgregarProducto(this.formularioProducto.value).subscribe(resp=>{
          console.log("agregar-Producto: ",resp);
                  this.respuesta=JSON.parse(resp);
          if (this.respuesta.status){
             Swal.fire('Aviso', this.respuesta.mensaje, 'success') 
          } else {
             Swal.fire('Aviso', this.respuesta.mensaje, 'error') 
          }
        });
  } else {
    console.log(this.formularioProducto.value);
    
    Swal.fire('Aviso', "Debe completar los datos del formulario", 'error') 
  }
}

}
