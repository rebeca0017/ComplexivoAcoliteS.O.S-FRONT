import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isNotAuthenticated();
  }

  isNotAuthenticated(): boolean {
    if (this.authService.isAuthenticated()) {
       if (this.authService.hasRole('admin')) {
         this.router.navigate(['/admin'], {
           queryParams: { returnUrl: '/admin' },
         });
         return false;
       } else if (this.authService.hasRole('mecanico')) {
         this.router.navigate(['/mecanico'], {
           queryParams: { returnUrl: '/mecanico' },
         });
       }
       else if (this.authService.hasRole('cliente')) {
        this.router.navigate(['/cliente'], {
          queryParams: { returnUrl: '/cliente' },
        });
      }
      return false;
    } else {
      return true;
    }
  }
}

