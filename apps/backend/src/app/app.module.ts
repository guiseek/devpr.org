import {Module} from '@nestjs/common'
import {BackendAuthModule} from '@devpr.org/backend/auth'
import {BackendUserModule} from '@devpr.org/backend/user'
import {DatabaseModule} from '../database/database.module'

import {AppController} from './app.controller'
import {AppService} from './app.service'

@Module({
  imports: [BackendAuthModule, BackendUserModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
