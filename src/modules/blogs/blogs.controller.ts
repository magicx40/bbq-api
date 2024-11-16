import { Body, Controller, Get, Post, Put, Param } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogsDto } from './dto/blogs.dto';
import { plainToInstance } from 'class-transformer';
import { QueryUserDto } from '../users/dto/query-user.dto';
import { QueryBlogsDto } from './dto/query-blogs.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Get()
  async findAll() {
    const blogs = await this.blogsService.findAll();

    const blogEntities = blogs.map((blog) => {
      return {
        ...blog,
        user: plainToInstance(QueryUserDto, blog.user),
      };
    });

    return plainToInstance(QueryBlogsDto, blogEntities);
  }

  @Post('save')
  async create(@Body() createBlogsDto: CreateBlogsDto) {
    await this.blogsService.create(createBlogsDto);
    return { message: '创建博客成功' };
  }

  @Put('/update/:id')
  async update(
    @Param('id') id: number,
    @Body() updateBlogsDto: CreateBlogsDto,
  ) {
    await this.blogsService.update(id, updateBlogsDto);
    return { message: '更新博客成功' };
  }

  @Post('/delete')
  async deleteOne(@Body('id') id: number) {
    await this.blogsService.deleteOne(id);
    return { message: '删除成功' };
  }
}
