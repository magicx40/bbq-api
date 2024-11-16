import { IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class TagDto {
  @IsNotEmpty({ message: '标签名称不能为空' })
  @IsString({ message: '标签名称必须为字符串类型' })
  @MaxLength(50, { message: '标签名称长度不能超过50' })
  name: string;

  @IsNotEmpty({ message: '标签类型不能为空' })
  @IsInt({ message: '标签类型必须为数字类型' })
  typeId: number;
}
