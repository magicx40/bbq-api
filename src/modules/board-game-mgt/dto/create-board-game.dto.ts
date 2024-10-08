import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateBoardGameDto {
  @IsNotEmpty()
  @IsString({ message: '游戏名称必须为字符串' })
  @MaxLength(255)
  title: string;

  @IsNotEmpty()
  @IsString({ message: '游戏简介必须为字符串' })
  description: string;

  @IsNotEmpty()
  @IsInt({ message: '最小玩家数必须为整数' })
  minPlayers: number;

  @IsNotEmpty()
  @IsInt({ message: '最大玩家数必须为整数' })
  maxPlayers: number;

  @IsNotEmpty()
  @IsInt({ message: '游玩时长必须为整数' })
  playTime: number;

  @IsNotEmpty()
  @IsInt({ message: '年龄评级必须为整数' })
  ageRating: number;

  @IsNotEmpty()
  @IsString({ message: '游戏类型必须为字符串' })
  @MaxLength(255, { message: '游戏类型不能超过255个字符' })
  publisher: string;

  @IsNotEmpty()
  @IsString({ message: '发布日期必须为日期字符串' })
  releaseDate: Date;

  @IsNotEmpty()
  @IsString({ message: '游戏类别必须为字符串' })
  @MaxLength(100, { message: '游戏类别不能超过100个字符' })
  category: string;

  @IsOptional()
  @IsString({ message: '图片链接必须为链接字符串' })
  @MaxLength(255, { message: '图片链接不能超过255个字符' })
  imageUrl?: string;
}
