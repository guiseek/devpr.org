import {Exclude} from 'class-transformer'
import {Role, User} from '@devpr.org/backend/api'

export class UserResponseDto implements User {
  id: number
  username: string
  email: string
  name: string
  photoUrl: string
  role: Role
  status: boolean
  createdAt: Date
  updatedAt: Date

  @Exclude()
  password: string

  @Exclude()
  salt: string

  constructor(user: User) {
    Object.assign(this, user)
  }
}
