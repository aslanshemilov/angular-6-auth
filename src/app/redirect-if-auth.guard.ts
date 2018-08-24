import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RedirectIfAuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const { isAuthenticated } = this.auth;

    if (isAuthenticated) {
      this.router.navigateByUrl('/home');
    }

    return !isAuthenticated;
  }
}
