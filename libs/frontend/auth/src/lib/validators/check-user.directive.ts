import {Directive, inject} from '@angular/core'
import {
  AsyncValidator,
  AbstractControl,
  ValidationErrors,
  NG_ASYNC_VALIDATORS,
} from '@angular/forms'
import {FrontendAuthService} from '@devpr.org/frontend/api'
import {BehaviorSubject, catchError, map, Observable, of} from 'rxjs'

@Directive({
  exportAs: 'devprCheckUser',
  selector: '[devprCheckUser]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: CheckUserDirective,
      multi: true,
    },
  ],
})
export class CheckUserDirective implements AsyncValidator {
  service = inject(FrontendAuthService)

  private _message = new BehaviorSubject<string | null>(null)
  public message$ = this._message.asObservable()

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.service.checkUser({username: control.value}).pipe(
      map(({message}) => {
        if (message) {
          this._message.next(message)
          return {unique: message}
        }
        return null
      }),
      catchError(() => of(null))
    )
  }
}
