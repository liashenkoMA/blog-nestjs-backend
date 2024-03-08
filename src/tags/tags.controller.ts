import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TagsService } from './tags.service';
import { CreateTagsDto } from './tags.schema.dto';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

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
}
