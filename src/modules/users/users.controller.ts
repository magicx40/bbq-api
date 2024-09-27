import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { plainToInstance } from 'class-transformer';
import { QueryUserDto } from './dto/query-user.dto';
import { password_hash } from 'src/util/bcrypt';
import { RoleEnum } from '../roles/roles.enum';
import { Roles } from '../roles/roles.decorator';
import { UpdateUserRolesDto } from '../roles/dto/update-user-roles.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Roles(RoleEnum.ADMIN)
  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    return plainToInstance(QueryUserDto, users);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post('save')
  async create(@Body() createUserDto: CreateUserDto) {
    createUserDto.password = await password_hash(createUserDto.password);
    await this.usersService.create(createUserDto);
    return { message: '创建用户成功' };
  }

  @Put('update/roles')
  async updateUserRoles(@Body() updateUserRolesDto: UpdateUserRolesDto) {
    await this.usersService.updateUserRoles(updateUserRolesDto);
    return { message: '更新用户角色成功' };
  }
}
