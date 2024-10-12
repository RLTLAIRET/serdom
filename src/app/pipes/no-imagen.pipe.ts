import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Pipe({
  name: 'noImagen'
})
export class NoImagenPipe implements PipeTransform {
  ruta=environment.catalogoUrl+"upload/"
  transform(imagen: string): string {
     console.log("pipe: ", imagen);
     
    if (!imagen){
      console.log("imagen en blanco", imagen);
      
      return this.ruta+"no-imagen.jpg"
    } else {
      console.log("pipe devuelto",this.ruta+imagen);
      return this.ruta+imagen
    }

    
  }

}
