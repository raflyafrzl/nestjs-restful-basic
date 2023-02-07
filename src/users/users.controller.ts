import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UsePipes } from '@nestjs/common/decorators';
import { ValidationPipe } from '@nestjs/common/pipes';
import { Request, Response } from 'express';
import CreateUserDTO from './dtos/createuser.dto';
import { Users } from './users.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  //If you using Response, you can't just return it. you have to specific with response variable(Similar to express)
  //NestJS Way
  @Get('search/:id')
  getUsers(@Param('id', ParseIntPipe) id: number) {
    const user = this.userService.findSpecificUser(id);

    return user;
  }

  @HttpCode(201)
  @Post('create')
  @UsePipes(ValidationPipe)
  createUser(@Body() createUser: CreateUserDTO) {
    const result: Users = this.userService.insertData(createUser);

    return result;
  }

  @HttpCode(200)
  @Get('')
  getAllCustomer(): Users[] {
    return this.userService.findAll();
  }
}
