import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';
import { Tags, TagSchema } from './tags.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tags.name, schema: TagSchema }]),
  ],
  controllers: [TagsController],
  providers: [TagsService],
})
export class TagsModule {}
