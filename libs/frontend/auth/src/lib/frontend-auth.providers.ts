import {HttpClient} from '@angular/common/http'
import {FrontendAuthService} from '@devpr.org/frontend/api'
import {FrontendAuthServiceImpl} from './infrastructure/frontend-auth.service.impl'

export const FRONTEND_AUTH_PROVIDERS = [
  {
    provide: FrontendAuthService,
    useFactory: (client: HttpClient) => new FrontendAuthServiceImpl(client),
    deps: [HttpClient],
  },
]
