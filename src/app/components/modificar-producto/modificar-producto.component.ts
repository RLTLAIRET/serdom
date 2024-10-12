import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';
import { Producto } from '../../modelo/producto';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.css']
})
export class ModificarProductoComponent implements OnInit {

  formularioProducto:FormGroup;
  previsualizacion:string="";
  loading:boolean=false;
  respuesta:any;
  categorias:any;
  producto:any;
  id:any;

  constructor( public formulario:FormBuilder,
               private catService: CategoriaService,
               private rest: ProductoService,
               private router: Router,
               private activa: ActivatedRoute) { 

               this.id =this.activa.snapshot.paramMap.get('id')
              

    this.formularioProducto=this.formulario.group({
      categoria: [''],
      nombre: [''],
      descripcion:[''],
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
    this.rest.consultarProducto(this.id).subscribe(resp=>{
      this.respuesta=JSON.parse(resp);
      this.producto=this.respuesta.data
      console.log(this.respuesta);
          
      this.formularioProducto.controls['nombre'].setValue(this.producto[0]['nombre'])
      this.formularioProducto.controls['descripcion'].setValue(this.producto[0]['descripcion'])
      this.formularioProducto.controls['imagen'].setValue(this.producto[0]['imagen'])
      this.formularioProducto.controls['manual'].setValue(this.producto[0]['manualpdf'])
      this.formularioProducto.controls['precio'].setValue(this.producto[0]['precio'])
      this.formularioProducto.controls['stock'].setValue(this.producto[0]['stock'])

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
        this.rest.editarProducto(this.id,this.formularioProducto.value).subscribe(resp=>{
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
