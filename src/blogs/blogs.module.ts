import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogsService } from './blogs.service';
import { BlogsController } from './blogs.controller';
import { Pages, PagesSchema } from 'src/pages/pages.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pages.name, schema: PagesSchema }]),
  ],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class BlogsModule {}
