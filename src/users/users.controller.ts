import {
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  //If you using Response, you can't just return it. you have to specific with response variable(Similar to express)
  //NestJS Way
  @Get(':id')
  getUsers(@Param('id', ParseIntPipe) id: number) {
    return {
      id: id + 'hello',
      message: 'You have logged in successfully',
    };
  }
}
