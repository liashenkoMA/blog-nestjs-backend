import { Controller, Get, Param } from '@nestjs/common';
import { BlogsService } from './blogs.service';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Get()
  getCategories() {
    return this.blogsService.findAll();
  }

  @Get('pages/:id')
  getLimitPage(@Param('id') id: string) {
    return this.blogsService.findLimitPage(id);
  }

  @Get('count')
  getCount() {
    return this.blogsService.getCount();
  }

  @Get('featcount')
  getCountFeaturedPages() {
    return this.blogsService.findCountFeatured();
  }

  @Get('featlimit/:id')
  getLimitFeaturedPage(@Param('id') id: string) {
    return this.blogsService.findLimitFeaturedPage(id);
  }
}
