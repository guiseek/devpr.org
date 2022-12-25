import { SnakeNamingStrategy } from './strategies/snake-naming.strategy';
import { environment } from '../environments/environment';
import { DataSource } from 'typeorm';
import { entityContainer } from '@devpr.org/backend/util';

const entities = entityContainer.get()

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        namingStrategy: new SnakeNamingStrategy(),
        ...environment.db,
        entities,
      });
      return dataSource.initialize();
    },
  },
];
