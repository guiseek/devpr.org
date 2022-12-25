import {HttpErrorResponse} from '@angular/common/http'
import {inject, Injectable} from '@angular/core'
import {
  Router,
  CanActivate,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router'
import {FrontendAuthService} from '@devpr.org/frontend/api'
import {catchError, map, Observable} from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  authService = inject(FrontendAuthService)
  router = inject(Router)

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.checkAuth().pipe(
      map((me) => !!me),
      catchError((err, caught) => {
        if (err) {
          this.redirectToAuth(err, state)
          throw err
        }
        return caught
      })
    )
  }

  redirectToAuth(err: HttpErrorResponse, {url}: RouterStateSnapshot) {
    if (err.status === 401) {
      this.router.navigate(['/auth'], {queryParams: {redirectTo: url}})
    }
  }
}
