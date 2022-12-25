import {Component, EventEmitter, inject, Output} from '@angular/core'
import {FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'devpr-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  builder = inject(FormBuilder)

  @Output() signUp = new EventEmitter()

  form = this.builder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    email: ['', [Validators.required, Validators.email]],
    name: ['', [Validators.required, Validators.maxLength(500)]],
  })
}
