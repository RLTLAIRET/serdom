import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { UploadService } from '../../services/upload.service';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  @Output() archivoasubir  =new EventEmitter(); 
  ruta=environment.catalogoUrl+"upload/";
  public previsualizacion: string = '';
  public archivos: any = [];
  public loading: boolean = false;
  public loader: boolean=false;
  form!: FormData;
  archivoCapturado:any;
  img:any;
  constructor(private sanitizer: DomSanitizer,
              private subir : UploadService) { }
  


  captureFile(event: any) {
    this.archivoCapturado = event.target.files;
    this.extraerBase64(this.archivoCapturado[0]).then((imagen: any) => {
    this.previsualizacion = imagen.base;
    });
    this.archivos.push(this.archivoCapturado[0]);
   
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
    this.archivos = [];
  }

  // subiendoando(ev:any){
  //   // console.log(ev.target.files);
  //   let img:any = this.archivoCapturado;
  //   if(img.files.length > 0){
  //        this.loader = true;
  //     this.form = new FormData();
  //     this.form.append('file',img.files[0]);
  //   }

  // }
  subirArchivo(){
    
    this.previsualizacion = '';
    this.loading = true;
      // console.log(ev.target.files);
      console.log(this.archivoCapturado);
      if(this.archivoCapturado.length > 0){
        this.loader = true;
        this.form = new FormData();
        this.form.append('file',this.archivoCapturado[0]);
        console.log(this.archivoCapturado[0]);
      }
     this.subir.subirImagen(this.form).subscribe(resp =>{
      console.log(resp);
      
      this.archivoasubir.emit(resp)
     
      
    }        
    );
  }

  // subirArchivo(): any {
  //   try {
  //     this.previsualizacion = '';
  //     this.loading = true;
  //     const formData = new FormData();
  //     this.archivos.forEach((archivo :any) => {
  //       formData.append('files', archivo);
  //       this.loading = false;
  //        // PASAR ARCHIVO A COMPONENTE PADRE
  //       this.archivoasubir.emit(archivo);
       
  //       // COPIA ARCHIVO CON EL SERVICIO
  //       this.subir.subirImagen(formData).subscribe(resp =>{
  //         console.log("resp: ",formData);
                    
        
          
  //       })
  //     })
  //   } catch (error) {
  //     this.loading = false;
  //   }
  // }
  ngOnInit(): void {
  }

 
    
  }    
 

