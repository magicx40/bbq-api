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
};
