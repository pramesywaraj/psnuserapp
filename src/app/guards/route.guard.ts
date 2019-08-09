import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {

  constructor(
    private router: Router,
    private LoginService: LoginService
  ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const currentToken = window.localStorage.getItem('token');
    if(currentToken !== null){
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }


}
