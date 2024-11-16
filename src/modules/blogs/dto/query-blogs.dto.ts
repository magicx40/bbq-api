import { Exclude } from 'class-transformer';
import { Tag } from 'src/modules/tags/entities/tag.entity';
import { User } from 'src/modules/users/entities/user.entity';

export class QueryBlogsDto {
  id: number;
  @Exclude()
  userId: number;
  title: string;
  slug: string;
  content: string;
  description: string;
  published: boolean;
  coverLink: string;
  createdAt: Date;
  updatedAt: Date;
  tags: Tag[];
  users: User[];
}
