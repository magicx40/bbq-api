import {
  IsNotEmpty,
  IsInt,
  IsString,
  MaxLength,
  IsEnum,
} from 'class-validator';
import { PrdPriorityEnum } from '../prds.enum';

export class CreatePrdDto {
  @IsNotEmpty({ message: '标题不能为空' })
  @IsString({ message: '标题必须是字符串' })
  @MaxLength(255, { message: '标题长度不能超过255' })
  title: string;

  @IsNotEmpty({ message: '描述不能为空' })
  @IsString({ message: '描述必须是字符串' })
  description: string;

  @IsNotEmpty({ message: '优先级不能为空' })
  @IsEnum(PrdPriorityEnum, {
    message: '优先级必须是Low(3) | Medium(2) | High(1)',
  })
  priority: PrdPriorityEnum;

  @IsNotEmpty({ message: '创建人不能为空' })
  @IsInt({ message: '创建人必须是数字' })
  createdBy: number;
}
