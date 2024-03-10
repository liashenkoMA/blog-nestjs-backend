import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TagsService } from './tags.service';
import { CreateTagsDto } from './tags.schema.dto';
import { PagesService } from 'src/pages/pages.service';

@Controller('tags')
export class TagsController {
  constructor(
    private readonly tagsService: TagsService,
    private readonly pagesService: PagesService,
  ) {}

  @Post()
  postTag(@Body() tags: CreateTagsDto) {
    return this.tagsService.create(tags);
  }

  @Get()
  getTags() {
    return this.tagsService.findAll();
  }

  @Get(':id')
  getTag(@Param('id') id: string) {
    return this.tagsService.findTag(id);
  }

  @Get('count/:id')
  getCount(@Param('id') id: string) {
    return this.pagesService.getCountTag(id);
  }
}
