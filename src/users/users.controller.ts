import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { plainToInstance } from 'class-transformer';
import { QueryUserDto } from './dto/query-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    return plainToInstance(QueryUserDto, users);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post('/save')
  @UsePipes(new ValidationPipe())
  async create(@Body() createUserDto: CreateUserDto) {
    await this.usersService.create(createUserDto);
    return { message: '创建成功' };
  }
}
