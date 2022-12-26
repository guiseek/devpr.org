import {
  User,
  CheckUser,
  CheckAuth,
  CreateUser,
  AuthRequest,
  AuthResponse,
  CheckResponse,
} from '@devpr.org/common/api'
import {Observable} from 'rxjs'

export abstract class FrontendAuthService {
  abstract login(value: AuthRequest): Observable<AuthResponse>
  abstract createUser(value: CreateUser): Observable<User>
  abstract checkUser(value: CheckUser): Observable<CheckResponse>
  abstract checkAuth(): Observable<CheckAuth>
}
