import {Route} from '@angular/router'
import {UserGuard} from './guards/user.guard'
import {AccountComponent} from './containers/account/account.component'

export const frontendUserRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'account',
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [UserGuard],
    children: [],
  },
]
