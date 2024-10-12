import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CatalogoService } from '../../services/catalogo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-catalogo',
  templateUrl: './agregar-catalogo.component.html',
  styleUrls: ['./agregar-catalogo.component.css']
})
export class AgregarCatalogoComponent implements OnInit {

  formularioCatalogo:FormGroup;
  previsualizacion:string="";
  loading:boolean=false;

  respuesta:any;

  constructor( public formulario:FormBuilder,
               private catalogoService: CatalogoService,
               private router: Router) {

    this.formularioCatalogo=this.formulario.group({
      nombre: ['', Validators.required],
      descripcion:['', Validators.required],
      imagen: ['', Validators.required],
     
      })
   }

  ngOnInit(): void {
   
  }


  regresarConfig(){
     this.router.navigate(['/config']);
  }

  capturarFile(event:string){
     this.loading=true;
     let longitud =event.length;
     this.formularioCatalogo.controls['imagen'].setValue(event.slice(1,longitud-1));
  }

  enviarCatalogo(){
    if (this.formularioCatalogo.valid){
        this.catalogoService.AgregarCatalogo(this.formularioCatalogo.value).subscribe(resp=>{
        this.respuesta=JSON.parse(resp);
        if (this.respuesta.status){
          Swal.fire('Catálogo', this.respuesta.mensaje, 'success') 
        } else {
          Swal.fire('Catálogo', this.respuesta.mensaje, 'error') 
        }
     });
           
    } else {
    Swal.fire('Aviso', 'Debe completar todos los campos del formulario', 'error') 
    }
 }


}
   

