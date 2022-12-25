import {Module} from '@nestjs/common'
import {PassportModule} from '@nestjs/passport'
import {LocalStrategy} from './strategies/local.strategy'
import {BackendAuthController} from './backend-auth.controller'
import {BackendAuthService} from './backend-auth.service'

import {JwtModule} from '@nestjs/jwt'
import {APP_GUARD} from '@nestjs/core'
import {jwtConstants} from './config/constants'
import {JwtAuthGuard} from './guards/jwt-auth.guard'
import {JwtStrategy} from './strategies/jwt.strategy'

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {expiresIn: '3600s'},
    }),
  ],
  controllers: [BackendAuthController],
  providers: [
    BackendAuthService,
    LocalStrategy,
    JwtStrategy,
    /**
     * If the vast majority of your endpoints should be
     * protected by default, you can register the authentication
     * guard as a global guard and instead of using @UseGuards()
     * decorator on top of each controller, you could simply
     * flag which routes should be public.
     */
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  exports: [BackendAuthService],
})
export class BackendAuthModule {}
