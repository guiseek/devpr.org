import {Component, EventEmitter, inject, Output} from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'



@Component({
  selector: 'devpr-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  builder = inject(FormBuilder)

  @Output() signIn = new EventEmitter()

  form = this.builder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })
}
