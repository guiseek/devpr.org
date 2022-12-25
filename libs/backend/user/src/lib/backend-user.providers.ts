import {DataSource, Repository} from 'typeorm'
import {BackendUserService} from '@devpr.org/backend/api'
import {BackendUserServiceImpl} from './backend-user.service.impl'
import {User} from './entities/user.entity'

export const BACKEND_USER_PROVIDERS = [
  {
    provide: 'user.repository',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['data.source'],
  },
  {
    provide: BackendUserService,
    useFactory: (repository: Repository<User>) =>
      new BackendUserServiceImpl(repository),
    inject: ['user.repository'],
  },
]
