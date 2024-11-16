import {
  IsNotEmpty,
  IsInt,
  IsBoolean,
  IsString,
  MaxLength,
  IsArray,
  IsOptional,
  Matches,
} from 'class-validator';

export class CreateBlogsDto {
  @IsNotEmpty({ message: '用户ID不能为空' })
  @IsInt({ message: '用户ID必须为数字' })
  userId: number;

  @IsNotEmpty({ message: '标题不能为空' })
  @IsString({ message: '标题必须为字符串' })
  @MaxLength(255, { message: '标题长度不能超过255' })
  title: string;

  @IsNotEmpty({ message: 'slug不能为空' })
  @IsString({ message: 'slug必须为字符串' })
  @Matches(/^[a-z0-9-]+$/, { message: 'slug必须为数字、小写字母和中横线' })
  @MaxLength(255, { message: 'slug长度不能超过255' })
  slug: string;

  @IsNotEmpty({ message: '内容不能为空' })
  @IsString({ message: '内容必须为字符串' })
  content: string;

  @IsNotEmpty({ message: '描述不能为空' })
  @IsString({ message: '描述必须为字符串' })
  description: string;

  @IsNotEmpty({ message: '是否发布不能为空' })
  @IsBoolean({ message: '是否发布必须为布尔值' })
  published: boolean;

  @IsNotEmpty({ message: '封面图链接不能为空' })
  @IsString({ message: '封面图链接必须为字符串' })
  @MaxLength(255, { message: '封面图链接长度不能超过255' })
  coverLink: string;

  @IsArray({ message: '标签必须为数组' })
  @IsOptional({ message: '标签可以为空' })
  @IsInt({ each: true, message: '标签必须为数字' })
  tags: number[];
}
