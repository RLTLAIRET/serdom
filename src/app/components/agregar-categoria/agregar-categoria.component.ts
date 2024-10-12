import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CatalogoService } from 'src/app/services/catalogo.service';
import Swal from 'sweetalert2';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-agregar-categoria',
  templateUrl: './agregar-categoria.component.html',
  styleUrls: ['./agregar-categoria.component.css']
})
export class AgregarCategoriaComponent implements OnInit {

  FormularioCategoria:FormGroup;
  previsualizacion:string="";
  loading:boolean=false;
  respuesta:any;
  catalogo:any;

  constructor( public formulario:FormBuilder,
               private rest: CatalogoService,
               private categoriaservice: CategoriaService,
               private router: Router) {

    this.FormularioCategoria=this.formulario.group({
      catalogo:['',Validators.required],
      nombre: ['',Validators.required],
      imagen: ['',Validators.required]
      })
   }

  ngOnInit(): void {
    this.rest.ListarCatalogo().subscribe(resp=>{
     this.respuesta=JSON.parse(resp);
     this.catalogo=this.respuesta.data;
   })

  }
  regresarConfig(){
     this.router.navigate(['/config']);
  }

capturarFile(event:any){
    this.loading=true;
    console.log("leyendo evento: ", event.slice(1,event.length-1));
    this.FormularioCategoria.controls['imagen'].setValue(event.slice(1,event.length-1));
   
  }
  enviarCategoria() {
    // console.log("Valores :",this.FormularioCategoria.value);
    
    if(this.FormularioCategoria.valid ){
       console.log(this.FormularioCategoria.value);
       
      this.categoriaservice.AgregarCategoria(this.FormularioCategoria.value).subscribe(resp=>{
    
      this.respuesta=JSON.parse(resp);

      if (this.respuesta.status){
          Swal.fire('Aviso', this.respuesta.mensaje, 'success') 
          this.restFormulario()
      } else {
        Swal.fire('Aviso', this.respuesta.mensaje, 'error') 
      }
    });
  } else {
    Swal.fire('Aviso', "Debe completar todos los campos del formulario", 'error') 
  }

}
restFormulario(){
  this.FormularioCategoria.reset({
    nombre: "",
    descripcion: "",
    imagen : "",
  })
}

}
