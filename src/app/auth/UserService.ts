import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router} from '@angular/router';
import { TokenStorageService } from './token-storage.service';
@Injectable({
  providedIn: 'root'
})
export class UserService implements CanActivate {
  authoritie: string = '';
  resultat: boolean;
  role:string;
 

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService,private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let roles = route.data["roles"] as Array<string>;

    this.resultat = this.tokenStorage.getAuthorities().every(role => {
      if (role == "ROLE_ADMIN_SUP") {
        this.authoritie = role;
        return true
      }
      else if (role == "ROLE_ADMIN") {
        this.authoritie = role;
        return true
      }
      else return false;
    }
    );
    if (this.resultat) {
    
      return (this.authoritie == route.data["roles"][0]);
    }
    else 
   {

    return false;}
  }








  
}