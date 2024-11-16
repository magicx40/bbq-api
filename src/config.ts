import { RedisSingleOptions } from '@nestjs-modules/ioredis';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const GLOBAL_API_PREFIX = 'api';
export const APP_DEFAULT_PORT = 3000;

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

export const AppConfig = {
  envFilePath: process.env.NODE_ENV
    ? `.env.${process.env.NODE_ENV}`
    : '.env.example',
  isGlobal: true,
};
