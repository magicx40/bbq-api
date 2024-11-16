import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, Logger, ValidationPipe } from '@nestjs/common';
import { APP_DEFAULT_PORT, GLOBAL_API_PREFIX } from './config';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<string>('SERVICE_PORT') || APP_DEFAULT_PORT;
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
  if (configService.get<string>('SwaggerUI') === 'true') {
    // Swagger 配置
    const config = new DocumentBuilder()
      .setTitle('BBQ-WEB API 稳定') // 设置标题
      .setDescription('BBQ-WEB的接口文档') // 添加描述
      .setVersion('1.0') // 版本号
      .addBearerAuth() // 如果有 JWT 身份验证，可以添加这一行
      .build();

    // 创建 Swagger 文档
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api-docs', app, document); // 设置访问路径 /api-docs
  }

  await app.listen(port);
  const service_url = await app.getUrl();
  Logger.log(`Application is running on: ${service_url}`);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
