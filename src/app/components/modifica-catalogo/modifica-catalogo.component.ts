import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-modifica-catalogo',
  templateUrl: './modifica-catalogo.component.html',
  styleUrls: ['./modifica-catalogo.component.css']
})
export class ModificaCatalogoComponent implements OnInit {
  
  formularioCatalogo:FormGroup;
  previsualizacion:string="";
  loading:boolean=false;
  respuesta:any;
  id:any;

  constructor(private fb: FormBuilder,
              private rest: RestService,
              private router: Router,
              private activa: ActivatedRoute) { 

    this.id =this.activa.snapshot.paramMap.get('id')
    console.log(this.id);
    this.formularioCatalogo=this.fb.group({
      nombre: [''],
      descripcion:[''],
      imagen: [''],
      size:[''],
      type:[''],
     })
     this.rest.obtener(this.id).subscribe(resp=>{
     console.log(JSON.stringify(resp));
     }


      /////
      // this.id =this.activatedRouted.snapshot.paramMap.get('id')
      // console.log(this.id);
      // this.crudService.obtenerEmpleado(this.id).subscribe(resp=>{
      //   console.log(resp);
      //   this.formularioDeEmpleado.setValue({
      //     nombre:resp[0]['nombre'],
      //     correo:resp[0]['correo']
      //   })
      // /*////


  }
  

  ngOnInit(): void {
  }

  capturarFile(event:any) {
    const datosArchivo=event.target.files;
    console.log(datosArchivo[0]);
    this.formularioCatalogo.controls['imagen'].setValue(datosArchivo[0].name);
    this.formularioCatalogo.controls['size'].setValue(datosArchivo[0].size);
    this.formularioCatalogo.controls['type'].setValue(datosArchivo[0].type);
  }

   enviarCatalogo(){
      console.log('datos formulario',this.formularioCatalogo.value);
      this.id =this.activa.snapshot.paramMap.get('id')
      console.log(this.id);
      this.rest.actualizar(this.id, this.formularioCatalogo.value).subscribe(resp=>{
      console.log(JSON.stringify(resp));

      
      if (this.respuesta.success){
          Swal.fire('Aviso', this.respuesta.mensaje, 'success') 
          this.router.navigate(['/listar-catalogo']);

      } else {
        Swal.fire('Aviso', this.respuesta.mensaje, 'error') 
      }
    });
           
  }
  clearImage(){

  }
 
cancelar(){
  this.router.navigate(['/listar-catalogo']);
}
}
