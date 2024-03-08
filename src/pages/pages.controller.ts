import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PagesService } from './pages.service';

@Controller('pages')
export class PagesController {
  constructor(private readonly pagesService: PagesService) {}

  @Post()
  postPage(@Body() page) {
    return this.pagesService.create(page);
  }

  @Get(':id')
  getPage(@Param('id') id: string) {
    return this.pagesService.findPage(id);
  }

  @Get()
  getFeaturedPages() {
    return this.pagesService.findFeatured();
  }

  @Get('tag/:id')
  getTagPages(@Param('id') id: string) {
    return this.pagesService.findTagPages(id);
  }
}
