import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { GlobalHttpExceptionFilter } from './filters/global-http-exception.filter';
import { TransformInterceptor } from './interceptor/transform.interceptor';

@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmConfig), UsersModule, RolesModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: GlobalHttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
})
export class AppModule {}
