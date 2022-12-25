import {HttpClient} from '@angular/common/http'
import {
  User,
  CheckUser,
  CreateUser,
  AuthRequest,
  AuthResponse,
  FrontendAuthService,
} from '@devpr.org/frontend/api'

export class FrontendAuthServiceImpl implements FrontendAuthService {
  constructor(private http: HttpClient) {}

  login(value: AuthRequest) {
    return this.http.post<AuthResponse>('/api/auth/login', value)
  }

  createUser(value: CreateUser) {
    return this.http.post<User>('/api/auth/register', value)
  }
  checkUser(value: CheckUser) {
    return this.http.post<User>('/api/auth/check', value)
  }
}
