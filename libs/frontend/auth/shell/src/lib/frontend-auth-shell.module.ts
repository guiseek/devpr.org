import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'
import {MatCardModule} from '@angular/material/card'
import {MatTabsModule} from '@angular/material/tabs'
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
// import {Mat Module} from '@angular/material/'
import {frontendAuthShellRoutes} from './lib.routes'
import {SignComponent} from './containers/sign/sign.component'
import {SignInComponent} from './components/sign-in/sign-in.component'
import {SignUpComponent} from './components/sign-up/sign-up.component'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild(frontendAuthShellRoutes),
  ],
  declarations: [SignComponent, SignInComponent, SignUpComponent],
})
export class FrontendAuthShellModule {}
