import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { User } from 'src/modules/users/entities/user.entity';
import { Tag } from 'src/modules/tags/entities/tag.entity';

@Entity('blogs')
export class Blog {
  @PrimaryGeneratedColumn({ comment: '主键' })
  id: number;

  @Column({ type: 'int', nullable: false, comment: '用户id' })
  user_id: number;

  @Column({
    type: 'varchar',
    length: 255,
    unique: true,
    nullable: false,
    comment: '标题',
  })
  title: string;

  @Column({
    type: 'varchar',
    length: 255,
    unique: true,
    nullable: false,
    comment: 'url slug',
  })
  slug: string;

  @Column({ type: 'text', nullable: false, comment: '内容' })
  content: string;

  @Column({ type: 'text', nullable: true, comment: '描述' })
  description: string;

  @Column({ type: 'boolean', default: false, comment: '是否发布' })
  published: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true, comment: '封面链接' })
  cover_link: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    comment: '创建时间',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
    comment: '更新时间',
  })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.blogs)
  user: User;

  @ManyToMany(() => Tag, (tag) => tag.blogs, { cascade: true })
  @JoinTable({
    name: 'blog_tags', // 指定连接表的名称
    joinColumn: { name: 'blog_id', referencedColumnName: 'id' }, // 定义连接表中引用当前实体的列
    inverseJoinColumn: { name: 'tag_id', referencedColumnName: 'id' }, // 定义连接表中引用目标实体的列
  })
  tags: Tag[];
}
