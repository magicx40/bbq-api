import { Exclude } from 'class-transformer';
import { Role } from 'src/modules/roles/entities/role.entity';

export class QueryUserDto {
  @Exclude()
  id: number;
  username: string;
  @Exclude()
  password: string;
  email: string;
  @Exclude()
  createdAt: Date;
  roles: Role[];
}
