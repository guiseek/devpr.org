import { TestBed } from '@angular/core/testing';

import { FrontendAuthInterceptor } from './frontend-auth.interceptor';

describe('FrontendAuthInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FrontendAuthInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: FrontendAuthInterceptor = TestBed.inject(FrontendAuthInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
