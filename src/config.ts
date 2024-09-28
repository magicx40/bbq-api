import { RedisSingleOptions } from '@nestjs-modules/ioredis';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'zhu88jie',
  database: 'bbq_api',
  autoLoadEntities: true,
  synchronize: false,
  logging: true,
};

export const RedisConfig: RedisSingleOptions = {
  type: 'single',
  url: 'redis://localhost:6379/1',
};
