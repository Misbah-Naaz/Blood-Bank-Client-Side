import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CheckLoggedInService } from './check-logged-in.service';

@Injectable({
  providedIn: 'root'
})
export class AccessServicesService implements CanActivate{
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

  this.getLogin.matchUserName()
  if(this.getLogin.check == true)
      return true;
  else
      return false;
      //return this.getlogin.check
  
}
  constructor(private getLogin:CheckLoggedInService) { }
}
