import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CatalogoService } from 'src/app/services/catalogo.service';

@Component({
  selector: 'app-uploadoc',
  templateUrl: './uploadoc.component.html',
  styleUrls: ['./uploadoc.component.css']
})
export class UploadocComponent implements OnInit {
  
  public previsualizacion: string = '';
  public documentos: any = [];
  public loading: boolean = false;

  @Output() documentoasubir  =new EventEmitter(); 
  constructor(private sanitizer: DomSanitizer,
               private rest : CatalogoService) { }

  ngOnInit(): void {
  }
  captureFiledoc(event: any) {
    const documentoCapturado = event.target.files[0];
    this.extraerBase64(documentoCapturado).then((doc: any) => {
      // this.previsualizacion = doc.base;
      this.subirArchivo()
     
    });
    this.documentos.push(documentoCapturado);
  
  
    
    
 
    
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

clearImage(): any {
  this.previsualizacion = '';
  this.documentos = [];
}
subirArchivo(): any {
  try {
    this.previsualizacion = '';
    this.loading = true;
    const formData = new FormData();
    this.documentos.forEach((archivo :any) => {
      formData.append('files', archivo);
      this.loading = false;
       // PASAR ARCHIVO A COMPONENTE PADRE
      this.documentoasubir.emit(archivo);
    
      // COPIA ARCHIVO CON EL SERVICIO
      this.rest.uploadServe(archivo).subscribe(resp =>{
            
      })
    })
  } catch (error) {
    this.loading = false;
  }
}

}
