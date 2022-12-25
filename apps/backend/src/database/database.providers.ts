import {SnakeNamingStrategy} from './strategies/snake-naming.strategy'
import {environment} from '../environments/environment'
import {DataSource} from 'typeorm'
import {entityContainer} from '@devpr.org/backend/util'
import {BACKEND_USER_PROVIDERS} from '@devpr.org/backend/user'

const entities = entityContainer.get()

export const databaseProviders = [
  {
    provide: 'data.source',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        namingStrategy: new SnakeNamingStrategy(),
        ...environment.db,
        entities,
      })
      return dataSource.initialize()
    },
  },
  ...BACKEND_USER_PROVIDERS,
]
