import {Role} from '../enums/role.enum'

export interface User {
  id: number

  username: string

  password: string

  salt: string

  email: string

  name: string

  photoUrl: string

  role: Role

  status: boolean

  createdAt: Date
  updatedAt: Date
}
