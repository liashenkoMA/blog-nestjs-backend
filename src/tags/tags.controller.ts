import { Body, Controller, Get, Post } from '@nestjs/common';
import { TagsService } from './tags.service';
import { CreateTagsDto } from './tags.schema.dto';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post()
  postPage(@Body() tags: CreateTagsDto) {
    return this.tagsService.create(tags);
  }

  @Get()
  getPages() {
    return this.tagsService.findAll();
  }
}
