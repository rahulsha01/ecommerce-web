import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FrameWorkService } from './frame-work.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _frameWorkService: FrameWorkService,
    private _router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._frameWorkService.isAuthenticated()) {
      return true;
    }
    this._router.navigate(['login']);
    return !this._frameWorkService.isAuthenticated()
    return true;
  }

}
