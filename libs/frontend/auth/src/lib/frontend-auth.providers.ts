import {HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http'
import {
  FrontendAuthService,
  FrontendStorageService,
} from '@devpr.org/frontend/api'
import {FrontendAuthServiceImpl} from './infrastructure/frontend-auth.service.impl'
import {FrontendAuthInterceptor} from './interceptors/frontend-auth.interceptor'

export const FRONTEND_AUTH_PROVIDERS = [
  {
    provide: FrontendAuthService,
    useFactory: (client: HttpClient) => new FrontendAuthServiceImpl(client),
    deps: [HttpClient],
  },
  {
    provide: 'auth.storage',
    useValue: localStorage,
  },
  {
    provide: FrontendStorageService,
    useFactory: (storage: Storage) => new FrontendStorageService(storage),
    deps: ['auth.storage'],
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: FrontendAuthInterceptor,
    multi: true,
  },
]
