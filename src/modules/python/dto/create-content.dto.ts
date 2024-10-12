import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateContentDto {
  @IsNotEmpty({ message: 'chapterId不能为空' })
  @IsInt({ message: 'chapterId必须为整数' })
  chapterId: number;

  @IsOptional()
  @IsString({ message: 'functionName必须为字符串' })
  @MaxLength(255, { message: 'functionName不能超过255个字符' })
  functionName?: string;

  @IsOptional()
  @IsString({ message: 'explanation必须为字符串' })
  explanation?: string;

  @IsOptional()
  @IsString({ message: 'example必须为字符串' })
  example?: string;
}
