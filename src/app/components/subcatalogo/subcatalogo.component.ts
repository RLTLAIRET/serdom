import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CategoriaService } from 'src/app/services/categoria.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-subcatalogo',
  templateUrl: './subcatalogo.component.html',
  styleUrls: ['./subcatalogo.component.css']
})
export class SubcatalogoComponent implements OnInit {

  cat:any;
  sub!:string;
  resultado:any
  public  ruta=environment.catalogoUrl+"upload/";
  constructor(private router : ActivatedRoute,
              private servi: CategoriaService) {
  this.router.params.subscribe(resp=>{
       this.sub=resp['id']; 
            this.servi.consultarCategoria(this.sub).subscribe(resp=>{
                 this.resultado=JSON.parse(resp);
                 this.cat=this.resultado.data;
                 console.log("id a buscar:",this.sub);
                 console.log("Respuesta-sub-catalogo:", this.cat);
        
       }) 
    })
  }

  ngOnInit(): void {
  }
 

}
