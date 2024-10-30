import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig, RedisConfig, AppConfig } from './config';
import { UsersModule } from './modules/users/users.module';
import { RolesModule } from './modules/roles/roles.module';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { GlobalHttpExceptionFilter } from './filters/global-http-exception.filter';
import { TransformInterceptor } from './interceptor/transform.interceptor';
import { AuthModule } from './auth/auth.module';
import { RolesGuard } from './modules/roles/roles.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LoggerMiddleware } from './logger/logger.middleware';
import { RedisModule } from '@nestjs-modules/ioredis';
import { ConfigModule } from '@nestjs/config';
import { BoardGameMgtModule } from './modules/board-game-mgt/board-game-mgt.module';
import { PythonModule } from './modules/python/python.module';
import { PrdsModule } from './modules/prds/prds.module';

@Module({
  imports: [
    ConfigModule.forRoot(AppConfig),
    TypeOrmModule.forRoot(TypeOrmConfig),
    UsersModule,
    RolesModule,
    RedisModule.forRoot(RedisConfig),
    AuthModule,
    BoardGameMgtModule,
    PythonModule,
    PrdsModule,
  ],
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
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
