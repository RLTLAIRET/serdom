import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../servicios/servicio.service';
import { CarruselService } from '../../services/carrusel.service';

@Component({
  selector: 'app-multi-carrusel',
  templateUrl: './multi-carrusel.component.html',
  styleUrls: ['./multi-carrusel.component.css']
})
export class MultiCarruselComponent implements OnInit {
 
  
  // noWrapSlides = true;

  respuesta:any;
  slidesa:any;
  slidesb:any;
  slidesc:any;
  longitud!:number;
  constructor(private servicio: CarruselService) { 


  }

  ngOnInit(): void {
    this.servicio.ListarImagen().subscribe(resp=>{
    this.respuesta=JSON.parse(resp);
    this.slidesa=this.respuesta.data;
    this.slidesb=this.respuesta.data;
    this.slidesc=this.respuesta.data;
    this.longitud=this.slidesa.length;
  
    
    
})
}

}
