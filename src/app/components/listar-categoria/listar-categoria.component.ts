import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css']
})
export class ListarCategoriaComponent implements OnInit {
  ruta=environment.catalogoUrl+"upload/";
  categorias:any;
  resultado:any;
  constructor(private rest : CategoriaService,
              private router: Router) { }

  ngOnInit(): void {
    this.rest.ListarCategoria().subscribe(resp=>{
      this.resultado=JSON.parse(resp);
      this.categorias=this.resultado.data
      console.log("listar-categorias:",this.categorias);
        
      if (!this.resultado.status){
        Swal.fire('Aviso','No hay categorias la base de datos', 'info') 
         this.router.navigate(['/agregar-categoria'])
      }
      
    
    });

  }

  eliminarCategoria(id:any, i:number, archivo:string){
    Swal.fire({
      title: 'Desea Eliminar esta Categoria?',
      showDenyButton: true,
      showCancelButton: false,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Categoria Eliminada!', '', 'success')
        this.rest.EliminarCategoria(id).subscribe(resp=>{
             this.categorias.splice(i,1);
             this.rest.deleteFile(archivo).subscribe(resp=>{
               console.log("despues de eliminar");
               
             })
        });
      } else if (result.isDenied) {
        // Swal.fire('Changes are not saved', '', 'info')
      }
    })

  }

}
