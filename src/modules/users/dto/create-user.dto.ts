import {
  IsArray,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';
import { RoleEnum } from 'src/modules/roles/roles.enum';

export class CreateUserDto {
  @IsString({ message: '用户名必须为字符串' })
  @IsNotEmpty({ message: '用户名不能为空' })
  @Length(1, 30, { message: 'username长度范围是1-30个字符' })
  username: string;

  @IsString({ message: '密码必须为字符串' })
  @IsNotEmpty({ message: '密码不能为空' })
  @Length(8, 25, { message: '密码长度范围是8-25个字符' })
  password: string;

  @IsEmail({}, { message: '邮箱格式不正确' })
  @IsOptional({ message: '邮箱可以为空' })
  @MaxLength(255, { message: '邮箱长度不能超过255个字符' })
  email: string;

  @IsArray({ message: '角色必须是一个数组' })
  @IsOptional({ message: '角色可以为空' })
  @IsEnum(RoleEnum, { each: true, message: '角色必须是枚举值' })
  roles: RoleEnum[];
}
