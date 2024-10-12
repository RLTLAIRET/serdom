import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { LoginService } from '../services/login.service';


@Injectable({
  providedIn: 'root'
})
export class CheckloginGuard implements CanActivate {
  usuario:any;
  constructor(private  servicio: LoginService,
              private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean 
  {
    this.usuario=this.servicio.currentUser$.value
    if (this.usuario){
            
        return true
    }
    this.router.navigate(['/inicio'])
    return false
    
    
    
  }
  
}
function tap(arg0: (resp: any) => void): import("rxjs").OperatorFunction<boolean, boolean | UrlTree> {
  throw new Error('Function not implemented.');
}

