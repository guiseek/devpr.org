import {HttpClient} from '@angular/common/http'
import {
  User,
  CheckUser,
  CheckAuth,
  CreateUser,
  AuthRequest,
  AuthResponse,
  FrontendAuthService,
  CheckResponse,
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
    return this.http.post<CheckResponse>('/api/auth/check', value)
  }

  checkAuth() {
    return this.http.get<CheckAuth>('/api/auth/me')
  }
}
