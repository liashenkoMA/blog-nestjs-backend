import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PagesService } from './pages.service';

@Controller('pages')
export class PagesController {
  constructor(private readonly pagesService: PagesService) {}

  @Post()
  postPage(@Body() page) {
    return this.pagesService.create(page);
  }

  @Get()
  getPages() {
    return this.pagesService.findAll();
  }

  @Get(':id')
  getPage(@Param('id') id: string) {
    return this.pagesService.findPage(id);
  }
}
