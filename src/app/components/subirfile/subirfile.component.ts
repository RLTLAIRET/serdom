import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-subirfile',
  templateUrl: './subirfile.component.html',
  styleUrls: ['./subirfile.component.css']
})
export class SubirfileComponent implements OnInit {

  trueimg:Boolean = false;
  loader:Boolean = false;
  myimg:string="";
  final:Boolean = true;
  msn:string="";
  ruta=environment.catalogoUrl+"upload/";

  constructor(private subir:UploadService) { }

  ngOnInit() {
    this.msn = "Subir una imagen no mayor de 10MB";
  }
  
  subiendoando(ev:any){
    console.log(ev.target.files);
    

    let img:any = ev.target;
    if(img.files.length > 0){
      console.log("entrando");
      
      this.loader = true;
      let form = new FormData();
      form.append('file',img.files[0]);
      this.subir.subirImagen(form).subscribe(resp =>{
        console.log(resp);
        
      }        
      );

    }

  }
}
