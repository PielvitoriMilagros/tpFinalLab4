import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../servicios/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentiGuard implements CanActivate {
  constructor(private router:Router,private authService:AuthentificationService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return this.authService.logueado().then(resp =>{
      if(resp){
        return true;
      }else{
        this.router.navigate(['/Login']);
        return false;
      }
    });

  }
  
}
