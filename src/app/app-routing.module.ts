import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { SubcatalogoComponent } from './components/subcatalogo/subcatalogo.component';
import { ConfigComponent } from './components/config/config.component';
import { AgregarCatalogoComponent } from './components/agregar-catalogo/agregar-catalogo.component';
import { ListarCatalogoComponent } from './components/listar-catalogo/listar-catalogo.component';
import { ListarCategoriaComponent } from './components/listar-categoria/listar-categoria.component';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { AgregarCategoriaComponent } from './components/agregar-categoria/agregar-categoria.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ModificarCatalogoComponent } from './components/modificar-catalogo/modificar-catalogo.component';
import { ProductoComponent } from './components/producto/producto.component';
import { CotizarComponent } from './components/cotizar/cotizar.component';
import { CheckloginGuard } from './guards/checklogin.guard';
import { ListadoProductosComponent } from "./components/listado-productos/listado-productos.component"
import { ModificarProductoComponent } from './components/modificar-producto/modificar-producto.component';
import { ConfigCarruselComponent } from './components/config-carrusel/config-carrusel.component';

const routes: Routes = [
  
  { path: 'inicio', component: InicioComponent},
  { path: 'servicios', component: ServiciosComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'catalogo', component: CatalogoComponent },
  // { path: 'callback', component: CatalogoComponent },
  { path: 'contacto', component: ContactoComponent},
  { path: 'agregar-catalogo', component: AgregarCatalogoComponent,canActivate:[CheckloginGuard] },
  { path: 'agregar-categoria', component: AgregarCategoriaComponent,canActivate:[CheckloginGuard] },
  { path: 'agregar-producto', component: AgregarProductoComponent,canActivate:[CheckloginGuard] },
  { path: 'listar-catalogo', component: ListarCatalogoComponent },
  { path: 'listar-producto', component: ListarProductoComponent },
  { path: 'listar-categoria', component: ListarCategoriaComponent },
  { path: 'modificar-catalogo/:id', component : ModificarCatalogoComponent, canActivate:[CheckloginGuard] },
  { path: 'modificar-producto/:id', component : ModificarProductoComponent, canActivate:[CheckloginGuard] },
  { path: 'config', component: ConfigComponent, canActivate:[CheckloginGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'login/:id', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'mostrar-producto/:id', component: ProductoComponent},
  { path: 'subcatalogo/:id', component: SubcatalogoComponent},
  { path : 'cotizar/:producto', component: CotizarComponent},
  { path : 'config-carrusel', component: ConfigCarruselComponent, canActivate:[CheckloginGuard] },
  { path : 'listado-productos', component: ListadoProductosComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
