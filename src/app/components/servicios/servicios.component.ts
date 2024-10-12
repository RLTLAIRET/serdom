import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicios/servicio.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit { 
 
  servicios:any[]=[]
  constructor(private servicio:ServicioService) { }

  ngOnInit(): void {
     this.servicios=this.servicio.getServicios();
 
     
  }

}
