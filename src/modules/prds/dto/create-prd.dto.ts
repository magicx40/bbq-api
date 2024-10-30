import { IsNotEmpty, IsInt, IsString, MaxLength } from 'class-validator';

export class CreatePrdDto {
  @IsNotEmpty({ message: '标题不能为空' })
  @IsString({ message: '标题必须是字符串' })
  @MaxLength(255, { message: '标题长度不能超过255' })
  title: string;

  @IsNotEmpty({ message: '描述不能为空' })
  @IsString({ message: '描述必须是字符串' })
  description: string;

  @IsNotEmpty({ message: '优先级不能为空' })
  @IsInt({ message: '优先级必须是数字' })
  priority: number;

  @IsNotEmpty({ message: '创建人不能为空' })
  @IsInt({ message: '创建人必须是数字' })
  createdBy: number;
}
