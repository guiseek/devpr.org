import {Route} from '@angular/router'

export const appRoutes: Route[] = [
  {
    path: 'auth',
    loadChildren: () =>
      import('@devpr.org/frontend/auth/shell').then(
        (m) => m.FrontendAuthShellModule
      ),
  },
]
