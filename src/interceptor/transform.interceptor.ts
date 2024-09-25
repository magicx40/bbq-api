import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  HttpStatus,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        // 检查是否有直接设置的 message，如果有，直接使用这个结构
        if (data && data.message && !data.data) {
          return {
            code: HttpStatus.OK,
            message: data.message,
            data: null, // 明确设置 data 为 null
          };
        }
        // 否则，使用标准的包装结构
        return {
          data,
          code: HttpStatus.OK,
          message: 'success',
        };
      }),
    );
  }
}
