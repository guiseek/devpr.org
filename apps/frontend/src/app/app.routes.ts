import {Route} from '@angular/router'

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth'
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@devpr.org/frontend/auth').then((m) => m.FrontendAuthModule),
  },
]
