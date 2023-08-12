import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { successResponse } from './successResponse';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('capturando respuesta ')
    return next.handle().pipe(
      map(data => {
        if (typeof data !== 'object') {
          return data;
        }
        const statusCode = data.statusCode || 200;
        const message = data.message || '';
        const status = data.status || 'success';
        const responseData = data.data || data;
        const response = new successResponse();
        response.status = status;
        response.message = message;
        response.data = responseData;
        return {
          statusCode,
          ...response,
        };
      }),
    );
  }
}