import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatalogoService } from 'src/app/services/catalogo.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modificar-catalogo',
  templateUrl: './modificar-catalogo.component.html',
  styleUrls: ['./modificar-catalogo.component.css']
})
export class ModificarCatalogoComponent implements OnInit {

  formularioCatalogo:FormGroup;
  previsualizacion:string="";
  loading:boolean=false;
  respuesta:any;
  producto:any;
  id:any;
  imagen!:string;

  constructor( public formulario:FormBuilder,
               private rest: CatalogoService,
               private actrouter : ActivatedRoute,
               private router: Router ) {

    this.id =this.actrouter.snapshot.paramMap.get('id')
 
    
    this.formularioCatalogo=this.formulario.group({
      nombre: ['', Validators.required],
      descripcion:['',Validators.required],
      imagen: ['',Validators.required],
     
      })

    //// consultar catalogo
    this.rest.consultarCatalogo(this.id).subscribe(resp=>{
      this.respuesta= JSON.parse(resp);
      this.producto=this.respuesta.data;     
      this.formularioCatalogo.controls['nombre'].setValue(this.producto[0]['nombre'])
      this.formularioCatalogo.controls['descripcion'].setValue(this.producto[0]['descripcion'])
      this.formularioCatalogo.controls['imagen'].setValue(this.producto[0]['imagen'])
     
       
      });

   }
   regresarConfig(){
    this.router.navigate(['/config']);
 }
  ngOnInit(): void {
     
  }
  clearImage(){

  }
  capturarFile(event:any) {
    const datosArchivo=event.target.files[0];
  
    this.formularioCatalogo.controls['imagen'].setValue(datosArchivo.name);
   
  }

  actualizarCatalogo(){

      
      this.rest.editarCatalogo(this.id, this.formularioCatalogo.value).subscribe(resp=>{
    
      this.respuesta=JSON.parse(resp);
      if (this.respuesta.success){
          Swal.fire('Aviso', this.respuesta.mensaje, 'success') 
      } else {
        Swal.fire('Aviso', this.respuesta.mensaje, 'error') 
      }
    });
           
  }

}
