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

  @Get('tag/count/:id')
  getCategoryCountPages(@Param() param) {
    const x = param.id.split('&');
    const firstParam = x[0].slice(3);
    const endParams = x[1].slice(7);
    return this.pagesService.getCountTagPages(firstParam, endParams);
  }
}
