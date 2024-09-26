import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { plainToInstance } from 'class-transformer';
import { QueryUserDto } from './dto/query-user.dto';
import { password_hash } from 'src/util/bcrypt';
import { Roles } from 'src/roles/roles.decorator';

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
  @Roles('ADMIN')
  @Post('save')
  async create(@Body() createUserDto: CreateUserDto) {
    createUserDto.password = await password_hash(createUserDto.password);
    await this.usersService.create(createUserDto);
    return { message: '创建用户成功' };
  }
}
