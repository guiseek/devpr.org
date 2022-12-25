import {Route} from '@angular/router'
import {SignInComponent} from './components/sign-in/sign-in.component'
import {SignUpComponent} from './components/sign-up/sign-up.component'
import {SignComponent} from './containers/sign/sign.component'

export const frontendAuthShellRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign',
  },
  {
    path: 'sign',
    component: SignComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'in',
      },
      {
        path: 'in',
        component: SignInComponent,
      },
      {
        path: 'up',
        component: SignUpComponent,
      },
    ],
  },
]
