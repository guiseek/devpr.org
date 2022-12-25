import {User} from '@devpr.org/backend/api'

export interface AuthRequest extends Request {
  user: User
}
