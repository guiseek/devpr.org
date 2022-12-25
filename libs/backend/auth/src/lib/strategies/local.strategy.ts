import {Strategy} from 'passport-local'
import {PassportStrategy} from '@nestjs/passport'
import {Injectable, UnauthorizedException} from '@nestjs/common'
import {BackendAuthService} from '../backend-auth.service'
import {ContextIdFactory, ModuleRef} from '@nestjs/core'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private moduleRef: ModuleRef // private backendAuthService: BackendAuthService
  ) {
    super({
      passReqToCallback: true,
    })
  }

  async validate(request: Request, username: string, password: string) {
    const contextId = ContextIdFactory.getByRequest(request)
    const backendAuthService = await this.moduleRef.resolve(
      BackendAuthService,
      contextId
    )
    const user = await backendAuthService.validateUser({
      username,
      password,
    })
    if (!user) {
      throw new UnauthorizedException()
    }
    return user
  }
}
