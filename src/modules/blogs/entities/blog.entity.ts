import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  JoinColumn,
} from 'typeorm';
import { User } from 'src/modules/users/entities/user.entity';
import { Tag } from 'src/modules/tags/entities/tag.entity';

@Entity('blogs')
export class Blog {
  @PrimaryGeneratedColumn({ comment: '主键' })
  id: number;

  @Column({ name: 'user_id', type: 'int', nullable: false, comment: '用户id' })
  userId: number;

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

  @Column({
    name: 'cover_link',
    type: 'varchar',
    length: 255,
    nullable: true,
    comment: '封面链接',
  })
  coverLink: string;

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

  /**
   * @important ManyToOne关联, @JoinColumn 是必须的，需要显式指定外键列，不然的话默认生成的外键列会不符合你的数据库定义
   */
  @ManyToOne(() => User, (user) => user.blogs)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToMany(() => Tag, (tag) => tag.blogs, { cascade: true })
  @JoinTable({
    name: 'blog_tags', // 指定连接表的名称
    joinColumn: { name: 'blog_id', referencedColumnName: 'id' }, // 定义连接表中引用当前实体的列
    inverseJoinColumn: { name: 'tag_id', referencedColumnName: 'id' }, // 定义连接表中引用目标实体的列
  })
  tags: Tag[];
}
