import { Exclude } from 'class-transformer';

export class QueryUserDto {
  @Exclude()
  id: number;
  username: string;
  password: string;
  email: string;
  @Exclude()
  createdAt: Date;
}
