import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { plainToClass } from 'class-transformer';
import { RoleDto } from './dto/role.dto';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  async findAll(): Promise<RoleDto[]> {
    const roles = await this.rolesService.findAll();
    return roles.map((role) => plainToClass(RoleDto, role));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(+id);
  }

  @Post('save')
  async save(@Body() roleDto: RoleDto) {
    await this.rolesService.create(roleDto);
    return { message: '创建角色成功' };
  }
}
