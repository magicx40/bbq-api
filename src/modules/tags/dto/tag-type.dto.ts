import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class TagTypeDto {
  @IsNotEmpty({ message: '标签类型名不能为空' })
  @IsString({ message: '标签类型名必须为字符串类型' })
  @MaxLength(50, { message: '标签类型名长度不能超过50' })
  name: string;
}
