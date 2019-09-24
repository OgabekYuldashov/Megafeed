import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({providedIn: 'root'})
export class ProtectedPageGuard implements CanActivate {
  constructor(private router: Router) {

  }

  // tslint:disable-next-line:max-line-length
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('access_token')) {
      return true;
    }

    this.router.navigate(['/', 'user', 'signin']);
    return false;
  }

}
