import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from './entities/blog.entity';
import { In, Repository } from 'typeorm';
import { CreateBlogsDto } from './dto/blogs.dto';
import { Tag } from '../tags/entities/tag.entity';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(Blog) private readonly blogRepository: Repository<Blog>,
    @InjectRepository(Tag) private readonly tagRepository: Repository<Tag>,
  ) {}

  async findAll(): Promise<Blog[]> {
    return this.blogRepository.find({ relations: ['tags', 'user'] });
  }

  async create(createBlogsDto: CreateBlogsDto) {
    const { tags, ...blogData } = createBlogsDto;
    const tagIds = tags || [];
    const existingTags = await this.tagRepository.find({
      where: { id: In(tagIds) },
    });
    if (existingTags.length !== tagIds.length) {
      throw new NotFoundException('部分标签没有找到');
    }
    const blogs = this.blogRepository.create({
      ...blogData,
      tags: existingTags,
    });
    return await this.blogRepository.save(blogs);
  }

  /**
   * save 方法：适用于需要处理复杂实体关系和触发生命周期钩子的场景。
   * update 方法：适用于简单的更新操作，性能较高，不涉及复杂关系。
   * Object.assign：用于合并对象，更新对象的属性。
   * @param id 博客id
   * @param updateBlogsDto 要更新的blog的Dto对象，与创建相同
   * @returns
   */
  async update(id: number, updateBlogsDto: CreateBlogsDto) {
    const { tags, ...blogData } = updateBlogsDto;
    const tagIds = tags || [];
    const existingTags = await this.tagRepository.find({
      where: { id: In(tagIds) },
    });
    if (existingTags.length !== tagIds.length) {
      throw new NotFoundException('部分标签没有找到');
    }

    const originBlog = await this.blogRepository.findOne({
      where: { id },
      relations: ['tags'],
    });
    if (!originBlog) {
      throw new NotFoundException('博客未找到');
    }
    // 更新博客数据
    Object.assign(originBlog, blogData);
    originBlog.tags = existingTags;
    return this.blogRepository.save(originBlog);
  }

  async deleteOne(id: number) {
    const blog = await this.blogRepository.findOne({
      where: { id },
      relations: ['tags'],
    });

    if (!blog) {
      throw new NotFoundException('博客未找到');
    }

    // 删除博客实体
    return await this.blogRepository.remove(blog); // 级联删除需要使用它
  }
}
