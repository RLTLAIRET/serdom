import { Component, OnInit } from '@angular/core';

import { CatalogoService } from '../../services/catalogo.service';
import { environment } from '../../../environments/environment.prod';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
cat:any;
respuesta:any;
listado:boolean=false;
public  ruta=environment.catalogoUrl+"upload/";
  constructor(private servi: CatalogoService,
              private servicio : LoginService) {
       this.servi.ListarCatalogo().subscribe(resp =>{
          this.respuesta=JSON.parse(resp);
          this.cat=this.respuesta.data
          if (this.servicio.getUser) {
              this.listado=true;
          }    
           
          
       })

};

  ngOnInit(): void {
  }

}
