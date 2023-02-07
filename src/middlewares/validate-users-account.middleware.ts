import { HttpStatus, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class ValidateUserAccountMiddleware implements NestMiddleware {
  use(request: Request, response: Response, nextFunction: NextFunction): void {
    const { valid } = request.headers;
    console.log(valid);
    if (valid === 'true') {
      nextFunction();
    } else {
      response.status(HttpStatus.UNAUTHORIZED).send({
        status: 'failed',
        message: 'Unauthorized',
      });
    }
  }
}
