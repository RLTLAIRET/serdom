import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CatalogoService } from '../../services/catalogo.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-listar-catalogo',
  templateUrl: './listar-catalogo.component.html',
  styleUrls: ['./listar-catalogo.component.css']
})
export class ListarCatalogoComponent implements OnInit {
  catalogos:any;
  respuesta:any;
  ruta=environment.catalogoUrl+"upload/";
  constructor(private rest: CatalogoService, 
              private  router : Router) { }

  ngOnInit(): void {
    this.rest.ListarCatalogo().subscribe(resp=>{
      console.log("Respuesta-listar Catalogo :", JSON.parse(resp));
      this.respuesta=JSON.parse(resp)
      this.catalogos=this.respuesta.data
 
    if (this.respuesta.success==false){
      Swal.fire('Aviso','No hay catalogo en la base de datos', 'info') 
       this.router.navigate(['/agregar-catalogo'])
    }
    
  
  });
}

eliminarCatalogo(id:any, i:number, archivo:any){

  Swal.fire({
    title: 'Desea Eliminar este Catalogo?',
    showDenyButton: true,
    showCancelButton: false,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Catalogo Eliminado!', '', 'success')
      this.rest.EliminarCatalogo(id).subscribe(resp=>{
         this.catalogos.splice(i,1);
      });
      this.rest.deleteFile(archivo).subscribe(resp=>{
        console.log(" Despues de eliminar: ",resp);
      })
    } else if (result.isDenied) {
      // Swal.fire('Changes are not saved', '', 'info')
    }
  })
    
  
 }

}
