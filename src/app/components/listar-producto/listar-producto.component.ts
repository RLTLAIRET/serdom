import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {

  ruta=environment.catalogoUrl+"upload/";
  productos:any;
  categorias:any;
  respuesta:any;
  constructor(private rest: ProductoService,
              private catService : CategoriaService, 
              private  router : Router) { }

  ngOnInit(): void {
    this.catService.ListarCategoria().subscribe(resp=>{
    this.categorias=JSON.parse(resp)
 
    if (this.categorias.success==false){
      Swal.fire('Aviso','No hay categorias en la base de datos', 'info') 
       this.router.navigate(['/agregar-categoria'])
    }});

    this.rest.ListarProducto().subscribe(resp=>{
      console.log("Respuesta-listar Producto :", resp);
      this.respuesta=JSON.parse(resp)
      this.productos=this.respuesta.data
      if (this.respuesta.status==false){
        Swal.fire('Aviso','No hay productos en la base de datos', 'info') 
         this.router.navigate(['/agregar-producto'])
      }});
}

regresarConfig(){
  this.router.navigate(['/listar-producto']);
}
eliminarProducto(id:any, i:number, archivo:string, manual:string){

  Swal.fire({
    title: 'Desea Eliminar este Producto?',
    showDenyButton: true,
    showCancelButton: false,
  }).then((result) => {
    if (result.isConfirmed) {
       this.rest.EliminarProducto(id).subscribe(resp=>{
         console.log("Respuesta-eliminar:", resp);
         this.productos.splice(i,1);
         this.rest.deleteFile(archivo).subscribe(resp => console.log(resp));
         this.rest.deleteFile(manual).subscribe(resp => console.log(resp))
      });
    } else if (result.isDenied) {
      // Swal.fire('Changes are not saved', '', 'info')
    }
  })
    
 }

}
