import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductoService } from '../../services/producto.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  producto:any;
  sub!:string;
  hay:boolean=false;
  resultado:any;
  public  ruta=environment.catalogoUrl+"upload/";
  constructor(private rest: ProductoService,
              private router: ActivatedRoute) {
   
       this.router.params.subscribe(resp=>{
        this.sub=resp['id']; 
       });
       this.rest.consultarProductocat(this.sub).subscribe(resp=>{
              this.resultado=JSON.parse(resp);
              this.producto=this.resultado.data
              console.log("Respuesta Producto: ", this.producto);
              if (!this.resultado.status) {
                Swal.fire('Aviso', "No hay producto, para esta categoria", 'error') 
              } else {
               
              }
        })
      }

       

  ngOnInit(): void {
    
  }


}
