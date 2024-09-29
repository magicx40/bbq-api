import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, Logger, ValidationPipe } from '@nestjs/common';
import { APP_DEFAULT_PORT, GLOBAL_API_PREFIX } from './config';
import { ConfigService } from '@nestjs/config';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('SERVICE_PORT') || APP_DEFAULT_PORT;
  app.setGlobalPrefix(GLOBAL_API_PREFIX);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      exceptionFactory: (errors) => {
        const message = errors
          .map((err) => Object.values(err.constraints).join(', '))
          .join('; ');
        return new BadRequestException(message);
      },
    }),
  );
  await app.listen(port);
  const service_url = await app.getUrl();
  Logger.log(`Application is running on: ${service_url}`);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
