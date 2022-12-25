import { BackendUserService } from '@devpr.org/backend/api'
import {Module} from '@nestjs/common'
import {BackendUserController} from './backend-user.controller'
import {BACKEND_USER_PROVIDERS} from './backend-user.providers'

@Module({
  controllers: [BackendUserController],
  providers: [...BACKEND_USER_PROVIDERS],
  exports: [BackendUserService],
})
export class BackendUserModule {}
