import {
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';

export class RoleDto {
  @IsString({ message: '角色名称必须为字符串' })
  @IsNotEmpty({ message: '角色名称不能为空' })
  @Length(2, 10, { message: '角色名称长度必须在2到10之间' })
  roleName: string;

  @IsString({ message: '角色描述必须为字符串' })
  @IsOptional({ message: '角色描述可以为空' })
  @MaxLength(255, { message: '角色描述长度不能超过255' })
  description: string;
}
