import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';
import { Tags, TagSchema } from './tags.schema';
import { PagesModule } from 'src/pages/pages.module';
import { Pages, PagesSchema } from 'src/pages/pages.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tags.name, schema: TagSchema }]),
    MongooseModule.forFeature([{ name: Pages.name, schema: PagesSchema }]),
    PagesModule,
  ],
  controllers: [TagsController],
  providers: [TagsService],
})
export class TagsModule {}
