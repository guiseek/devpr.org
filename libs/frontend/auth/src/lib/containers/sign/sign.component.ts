import {Component, inject, OnDestroy} from '@angular/core'
import {ActivatedRoute, Router} from '@angular/router'
import {SubAsync} from '@devpr.org/common/util'
import {
  CreateUser,
  AuthRequest,
  FrontendAuthService,
  FrontendStorageService,
} from '@devpr.org/frontend/api'

@Component({
  selector: 'devpr-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent implements OnDestroy {
  links = [
    {path: '/auth/sign/in', label: 'In'},
    {path: '/auth/sign/up', label: 'Up'},
  ]

  sub = new SubAsync()

  router = inject(Router)
  route = inject(ActivatedRoute)

  service = inject(FrontendAuthService)

  storage = inject(FrontendStorageService)

  onSignIn<T extends AuthRequest>(value: T) {
    const login$ = this.service.login(value)

    this.sub.async = login$.subscribe((response) => {
      this.storage.set('auth', response)
      const {redirectTo = '/'} = this.route.snapshot.queryParams
      this.router.navigateByUrl(redirectTo)
    })
  }

  onSignUp<T extends CreateUser>(value: T) {
    const createUser$ = this.service.createUser(value)

    this.sub.async = createUser$.subscribe((response) => {
      console.log(response)
    })
  }

  ngOnDestroy() {
    this.sub.unsub()
  }
}
