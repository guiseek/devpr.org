import {Component, inject} from '@angular/core'
import {Router} from '@angular/router'

@Component({
  selector: 'devpr-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent {
  links = [
    {path: '/auth/sign/in', label: 'In'},
    {path: '/auth/sign/up', label: 'Up'},
  ]

  router = inject(Router)

  onSignIn<T>(value: T) {
    console.log(value)
  }

  onSignUp<T>(value: T) {
    console.log(value)
  }
}
