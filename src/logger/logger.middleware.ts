import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl } = req;

    // 获取请求参数
    const queryParams = JSON.stringify(req.query);
    const bodyParams = JSON.stringify(req.body);

    // 记录日志
    this.logger.log(
      `${method} ${originalUrl} - Query: ${queryParams} - Body: ${bodyParams}`,
    );

    next();
  }
}
