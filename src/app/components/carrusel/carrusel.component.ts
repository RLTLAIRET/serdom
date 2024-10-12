import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  slides = [
    {image: 'assets/img/banner0.jpg', text: 'Automatismos', message: '' },
    {image: 'assets/img/banner1.jpg', text: 'Control de Procesos', message: '' },
    {image: 'assets/img/banner3.jpg', text: 'Electricidad y Electrónica Industrial', message: '' },
    {image: 'assets/img/banner2.jpg', text: 'Instrumentación', message: '' },
    {image: 'assets/img/banner4.jpg', text: 'Informática', message: '' },
    {image: 'assets/img/banner7.jpg', text: 'Reparacion de Equipos Electrónicos', message: '' },
    {image: 'assets/img/banner8.jpg', text: 'Asesoría y Capacitación', message: '' },
    {image: 'assets/img/banner9.jpg', text: 'Montaje, Llave en mano y Mejoras', message: '' },
    
  ];  noWrapSlides = false ;


  constructor() { }

  ngOnInit(): void {
  }

}
