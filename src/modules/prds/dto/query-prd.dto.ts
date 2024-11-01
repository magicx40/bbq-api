import { User } from 'src/modules/users/entities/user.entity';

export class QueryPrdDto {
  id: number;
  title: string;
  description: string;
  priority: number;
  createdAt: Date;
  updatedAt: Date;
  createdBy: User;
}
