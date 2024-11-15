import { Role } from 'src/modules/roles/entities/role.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Blog } from 'src/modules/blogs/entities/blog.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable({
    //双向关系，只需要关系拥有者，写此注解即可
    name: 'user_roles', // 中间表名
    joinColumn: { name: 'user_id', referencedColumnName: 'id' }, // 当前实体（User）的外键
    inverseJoinColumn: { name: 'role_id', referencedColumnName: 'id' }, // 关联实体（Role）的外键
  })
  roles: Role[];

  @OneToMany(() => Blog, (blog) => blog.user)
  blogs: Blog[];
}
