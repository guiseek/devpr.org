import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {frontendUserRoutes} from './lib.routes'
import {AccountComponent} from './containers/account/account.component'

@NgModule({
  imports: [CommonModule, RouterModule.forChild(frontendUserRoutes)],
  declarations: [AccountComponent],
})
export class FrontendUserModule {}
