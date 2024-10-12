import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {

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
  CotizarProducto(){
     console.log("cotizar producto");
     
  }

}
