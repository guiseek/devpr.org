import {Route} from '@angular/router'

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@devpr.org/frontend/user').then((m) => m.FrontendUserModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@devpr.org/frontend/auth').then((m) => m.FrontendAuthModule),
  },
]
