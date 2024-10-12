import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpClientModule } from '@angular/common/http';

// import { CheckloginGuard } from './guards/checklogin.guard';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { MultiCarruselComponent } from './components/multi-carrusel/multi-carrusel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialesComponent } from './components/sociales/sociales.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { BarraLateralComponent } from './components/barra-lateral/barra-lateral.component';
import { CardServiciosComponent } from './components/card-servicios/card-servicios.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { SubcatalogoComponent } from './components/subcatalogo/subcatalogo.component';
import { BanerloginComponent } from './components/baner-login/banerlogin.component';
import { ConfigComponent } from './components/config/config.component';
import { ListarCatalogoComponent } from './components/listar-catalogo/listar-catalogo.component';
import { AgregarCatalogoComponent } from './components/agregar-catalogo/agregar-catalogo.component';
import { AgregarCategoriaComponent } from './components/agregar-categoria/agregar-categoria.component';
import { ListarCategoriaComponent } from './components/listar-categoria/listar-categoria.component';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ModificarCatalogoComponent } from './components/modificar-catalogo/modificar-catalogo.component';
import { UploadComponent } from './components/upload/upload.component';
import { UploadocComponent } from './components/uploadoc/uploadoc.component';
import { ProductoComponent } from './components/producto/producto.component';
import { CotizarComponent } from './components/cotizar/cotizar.component';
import { VistapreviaimgComponent } from './components/vistapreviaimg/vistapreviaimg.component';
import { SubirfileComponent } from './components/subirfile/subirfile.component';
import { ListadoProductosComponent } from './components/listado-productos/listado-productos.component';
import { NoImagenPipe } from './pipes/no-imagen.pipe';
import { ModificarProductoComponent } from './components/modificar-producto/modificar-producto.component';
import { ConfigCarruselComponent } from './components/config-carrusel/config-carrusel.component';
import { CardDeskComponent } from './components/card-desk/card-desk.component';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    ServiciosComponent,
    ContactoComponent,
    NosotrosComponent,
    MultiCarruselComponent,
    SocialesComponent,
    CarruselComponent,
    BarraLateralComponent,
    CardServiciosComponent,
    ContactFormComponent,
    CatalogoComponent,
    SubcatalogoComponent,
    BanerloginComponent,
    ConfigComponent,
    ListarCatalogoComponent,
    AgregarCatalogoComponent,
    AgregarCategoriaComponent,
    ListarCategoriaComponent,
    ListarProductoComponent,
    AgregarProductoComponent,
    LoginComponent,
    RegistroComponent,
    ModificarCatalogoComponent,
    UploadComponent,
    UploadocComponent,
    ProductoComponent,
    CotizarComponent,
    VistapreviaimgComponent,
    SubirfileComponent,
    ListadoProductosComponent,
    NoImagenPipe,
    ModificarProductoComponent,
    ConfigCarruselComponent,
    CardDeskComponent,
   

  


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
    // CheckloginGuard,
   
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
