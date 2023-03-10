import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'
import {MatCardModule} from '@angular/material/card'
import {MatTabsModule} from '@angular/material/tabs'
import {MatDividerModule} from '@angular/material/divider'
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {SignComponent} from './containers/sign/sign.component'
import {SignInComponent} from './components/sign-in/sign-in.component'
import {SignUpComponent} from './components/sign-up/sign-up.component'
import {frontendAuthRoutes} from './lib.routes'
import {CheckUserDirective} from './validators/check-user.directive'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTabsModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild(frontendAuthRoutes),
  ],
  declarations: [
    SignComponent,
    SignInComponent,
    SignUpComponent,
    CheckUserDirective,
  ],
})
export class FrontendAuthModule {}
