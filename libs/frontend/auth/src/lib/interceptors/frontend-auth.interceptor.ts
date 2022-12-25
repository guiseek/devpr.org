import {inject, Injectable} from '@angular/core'
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http'
import {catchError, Observable} from 'rxjs'
import {FrontendStorageService} from '@devpr.org/frontend/api'

@Injectable()
export class FrontendAuthInterceptor implements HttpInterceptor {
  storage = inject(FrontendStorageService)

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const {accessToken} = this.storage.get('auth') ?? {}
    const authReq = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${accessToken}`),
    })
    return next.handle(authReq).pipe(
      catchError((err, caught) => {
        if (err) {
          this.resetAuth(err)
          throw err
        }

        return caught
      })
    )
  }

  resetAuth(err: HttpErrorResponse) {
    if (err.status === 401) {
      this.storage.remove('auth')
    }
  }
}
