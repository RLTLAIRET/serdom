import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-vistapreviaimg',
  templateUrl: './vistapreviaimg.component.html',
  styleUrls: ['./vistapreviaimg.component.css']
})
export class VistapreviaimgComponent  {

  @Input() archivoimg:any;

  public previsualizacion: string = '';
 
  constructor(private sanitizer: DomSanitizer
              ) { }
  


  captureFile(archivoimg:any) {
   
    this.extraerBase64(archivoimg).then((imagen: any) => {
     return imagen.base;
    
   
    });
  
  }

  extraerBase64 = async ($event: any) => 
    new Promise(resolve => {
      try {
        const unsafeImg = window.URL.createObjectURL($event);
        const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload = () => {
          resolve({
            base: reader.result
          });
        };
      } catch (e) {
        return null;
      }
      return $event;
  });

  

}
